import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useTheme } from "@material-ui/core";
// import classes from "*.module.sass";


// ClassicEditor.builtinPlugins.map(plugin => console.log(plugin.pluginName));

function EditorWarpper(props){
  const theme = useTheme();
  const config = {
    toolbar: [
      "Essentials",
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "blockQuote",
      "autoformat",
      "imageUpload",
      "ImageToolbar",
      "MediaEmbed",
      "TableToolbar",
      "Table",
      "Image",
      "ImageStyle",
      "List"
    ],
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph"
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1"
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2"
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: theme.typography.h1
        }
      ]
    }
  };
  return (
    <CKEditor
      style={{ width: "100px" }}
      editor={ClassicEditor}
      data={props.data}
      onInit={props.onInit}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      config={config}
    />
  );
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  onInit = (event, editor) => {
    // You can store the "editor" and use when it is needed.
    console.log("Editor is ready to use!", editor);
  };
  onChange = (event, editor) => {
    const data = editor.getData();
    console.log({ event, editor, data });
  };
  onBlur = (event, editor) => {
    console.log("Blur.", editor);
  };
  onFocus = (event, editor) => {
    console.log("Focus.", editor);
  };

  render() {
    return (
      <div className="ck-editor-wrapper w-100">
        <EditorWarpper
          data={this.state.data}
          onInit={this.onInit}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </div>
    );
  }
}

export default Editor;
