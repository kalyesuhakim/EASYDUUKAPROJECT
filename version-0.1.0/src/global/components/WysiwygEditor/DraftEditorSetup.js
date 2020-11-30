import React from "react";
import "./app.css";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertFromHTML,
  ContentBlock,
  convertToRaw,
  EditorBlock,
  DefaultDraftBlockRenderMap,
  genKey
} from "draft-js";
import { List, Map, Repeat } from "immutable";
import { Typography } from "@material-ui/core";

class DraftEditorSetup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);

    this.store = window.localStorage;
    // this.store.clear();
    const content = window.localStorage.getItem("content");

    if (content) {
      this.state.editorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(content))
      );
    } else {
      this.state.editorState = EditorState.createEmpty();
    }
  }

  onChange(editorState) {
    const contentState = editorState.getCurrentContent();
    this.setState({ editorState });
    this.saveContent(contentState);
  }

  saveContent = content => {
    window.localStorage.setItem(
      "content",
      JSON.stringify(convertToRaw(content))
    );
  };

  toggleInlineStyle(event) {
    event.preventDefault();

    let style = event.currentTarget.getAttribute("data-style");
    this.setState({
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, style)
    });
  }

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );

    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  };

  render() {
    return (
      <div className="my-little-app">
        <h1>Playing with draft-js</h1>
        <input
          type="button"
          value="bold"
          data-style="BOLD"
          onMouseDown={this.toggleInlineStyle}
        />
        <div className="draft-editor-wrapper">
          <Editor
            style={{ height: "100px" }}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

class MyCustomBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="my-custom-block">
        <h1 contentEditable={false} readOnly>
          Not Editable title
        </h1>
        <div className="editable-area">
          <EditorBlock {...this.props} />
        </div>
      </div>
    );
  }
}

function blockRendererFn(contentBlock) {
  const type = contentBlock.getType();

  if (type === "MyCustomBlock") {
    return {
      component: MyCustomBlock,
      props: {}
    };
  }

  if(type == "Heading"){
      return {
          component: Typography,
          props: {}
      }
  }
}

const RenderMap = new Map({
  MyCustomBlock: {
    element: "div"
  },
  Typography: {
      element: Typography
  }
}).merge(DefaultDraftBlockRenderMap);

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(RenderMap);

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  _handleChange = editorState => {
    this.setState({ editorState });
  };
  _handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );

    if (newState) {
      this._handleChange(newState);
      return "handled";
    }

    return "not-handled";
  };
  _onAddCustomBlock = () => {
    const selection = this.state.editorState.getSelection();
    this._handleChange(
      addNewBlockAt(
        this.state.editorState,
        selection.getAnchorKey(),
        "MyCustomBlock"
      )
    );
  };

  _addTypo = () => {
      const selection = this.state.editorState.getSelection();
      this._handleChange(
        addNewBlockAt(
          this.state.editorState,
          selection.getAnchorKey(),
          "Heading"
        )
      );
  }

  render() {
    return (
      <div>
        <div className="container-root">
          <Editor
            handleKeyCommand={this._handleKeyCommand}
            placeholder="Type"
            blockRenderMap={extendedBlockRenderMap}
            blockRendererFn={blockRendererFn}
            editorState={this.state.editorState}
            onChange={this._handleChange}
          />
        </div>
        <button onClick={this._onAddCustomBlock}>Add Custom block</button>
        <button onClick={this._addTypo}>Add Custom block</button>
      </div>
    );
  }
}

const addNewBlockAt = (
  editorState,
  pivotBlockKey,
  newBlockType = "unstyled",
  initialData = new Map({})
) => {
  const content = editorState.getCurrentContent();
  const blockMap = content.getBlockMap();
  const block = blockMap.get(pivotBlockKey);
  if (!block) {
    throw new Error(
      `The pivot key - ${pivotBlockKey} is not present in blockMap`
    );
  }

  const blockBefore = blockMap.toSeq().takeUntil(v => v === block);
  const blocksAfter = blockMap
    .toSeq()
    .skipUntil(v => v === block)
    .rest();
  const newBlockKey = genKey();

  const newBlock = new ContentBlock({
    key: newBlockKey,
    type: newBlockType,
    text: "",
    characterList: new List(),
    depth: 0,
    data: initialData
  });

  const newBlockMap = blockBefore
    .concat(
      [
        [pivotBlockKey, block],
        [newBlockKey, newBlock]
      ],
      blocksAfter
    )
    .toOrderedMap();

  const selection = editorState.getSelection();

  const newContent = content.merge({
    blockMap: newBlockMap,
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: newBlockKey,
      anchorOffset: 0,
      focusKey: newBlockKey,
      focusOffset: 0,
      isBackward: false
    })
  });

  return EditorState.push(editorState, newContent, "split-block");
};
