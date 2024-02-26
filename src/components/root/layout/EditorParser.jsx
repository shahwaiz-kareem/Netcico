import edjsHTML from "editorjs-html";
import "./editorParser.css";
import { codeBlockParser } from "@/lib/editorjs/customParsers";
const edjsParser = edjsHTML({ code: codeBlockParser });

const EditorParser = ({ data }) => {
  const html = edjsParser.parseStrict(data).join("");

  return <div id="container" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EditorParser;
