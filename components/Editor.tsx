import { CohereAutoCompletion } from "@/editorPlugins/AiAutocompletion";
import { Editor } from "codecrush-react";

export const EditorWrapper = () => {
  return (
    <Editor
      height={400}
      id="js-editor"
      theme="material-ocean"
      components={[CohereAutoCompletion]}
    />
  );
};
