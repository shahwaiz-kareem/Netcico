import Prism from "prismjs";
import "prismjs/themes/prism.css";

export const codeBlockParser = ({ data }) => {
  console.log(data);
  const code = Prism.highlight(data.code, Prism.languages.javascript);
  return `
  <div  class="flex flex-col h-[40vh]   my-4 code-toolbar">
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
  const tbodyArr = data.content.slice(1);

  return `

    <div class="overflow-x-auto max-w-[90vw] lg:max-w-[61vw] py-2 md:pr-4 my-4">
    <table class=" w-full divide-y divide-gray-200">
      <thead class="bg-gray-100  rounded-lg">
          <tr  class="flex w-full" >
            ${theadArr
              .map((item) => {
                return `<th scope="col" class="px-6 w-full py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${item}</th>`;
              })
              .join("")}
          </tr>
        </thead>
        <tbody class=" rounded-lg ">
          ${tbodyArr
            .map((row) => {
              return `<tr class="flex   w-full ">
              ${row
                .map((item) => {
                  return `<td class="w-full  border border-gray-100  text-sm py-4 px-4">${item}</td>`;
                })
                .join("")}
            </tr>`;
            })
            .join("")}
        </tbody>
      </table>
    </div>
   
    `;
};
