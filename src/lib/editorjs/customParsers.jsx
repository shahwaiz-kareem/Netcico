import Prism from "prismjs";
import "prismjs/themes/prism.css";

export const codeBlockParser = ({ data }) => {
  const code = Prism.highlight(data.code, Prism.languages.javascript);

  return `

  <div class="flex flex-col  my-4 code-toolbar">
  <pre className="language-javascript">
  <code >
  ${code}
  </code>
  </pre>
  </div>
  `;
};
export const rawHtmlBlockParser = ({ data }) => {
  return `
  <div class="my-4">
  ${data.html}
  </div>
  `;
};

export const checkListBlockParser = ({ data }) => {
  return `
  <ul style="list-style-type: none; " class="my-4">
  ${data.items
    .map((e) => {
      return ` <div class="flex gap-2 items-center ">
    <input type="checkbox" class=" "  ${e.checked ? "checked" : ""} />
    <span  >${e.text}</span>
  </div>`;
    })
    .join("")}
 
  
</ul>
  `;
};

export const tableBlockParse = ({ data }) => {
  const theadArr = data.content[0];
  const tbodyArr = data.content.splice(1, data.content.length - 1);
  return `
  <div   class="flex flex-col my-4 rounded-lg border w-full">
  <div >
  <div class="w-full flex ">
   ${theadArr
     .map((e) => {
       return `<span class="border p-4 w-full text-xl font-bold">${e}</span>`;
     })
     .join("")}
  </div>
  </div>
  <div>
  ${tbodyArr
    .map((e) => {
      return `<div class="w-full text-right flex">
        ${e
          .map((cell) => {
            return `<span class="border w-full p-4 text-lg  text-right">${cell}</span>`;
          })
          .join("")}
      </div>`;
    })
    .join("")}
  </div>
  </div>
  `;
};
