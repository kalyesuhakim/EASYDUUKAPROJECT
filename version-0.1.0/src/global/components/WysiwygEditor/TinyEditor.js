import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@material-ui/core";

export default class TinyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
  }
  render() {
    return (
      <Editor
        ref={this.editorRef}
        // inline
        id={this.props.thread}
        initialValue={this.props.initialValue}
        init={{
          id: "my-tiny-id" + this.props.thread,
          width: "100%",
          height: "55vh",
          menubar: true,
          plugins: [
            "advlist autolink lists image charmap print preview anchor color",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          //   toolbar: "undo redo | bold italic backcolor | \
          //             alignleft aligncenter alignright alignjustify | \
          //             bullist numlist outdent indent | removeformat | help"
          toolbar: `undo redo link color | styleselect | bold italic underline strikethrough superscript subscript | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table image-insert link hr drawio media | removeformat code fullscreen`,
        }}
        onEditorChange={this.props.onChange}
      />
    );
  }
}
