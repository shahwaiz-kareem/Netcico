import edjsHTML from "editorjs-html";
import "./editorParser.css";
import {
  codeBlockParser,
  rawHtmlBlockParser,
  tableBlockParse,
  checkListBlockParser,
} from "@/lib/editorjs/customParsers";
const edjsParser = edjsHTML({
  code: codeBlockParser,
  table: tableBlockParse,
  raw: rawHtmlBlockParser,
  checkList: checkListBlockParser,
});

const EditorParser = ({ data }) => {
  console.log(data);
  const html = edjsParser.parseStrict(data).join("");
  return <div id="container" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EditorParser;
