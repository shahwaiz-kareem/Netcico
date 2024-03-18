import Prism from "prismjs";
import "prismjs/themes/prism.css";

export const codeBlockParser = ({ data }) => {
  const code = Prism.highlight(data.code, Prism.languages.javascript);
  const btnId = `${Date.now().toString(36)}`;
  return `

  <div class="flex flex-col   relative my-4 code-toolbar">
   <button id=${btnId} class="absolute shadow rounded-xl py-1 px-2 bg-gray-500 text-white right-0 top-1 mt-4 mr-2 cursor-pointer hover:bg-gray-800">
   copy
   </button>
  <pre className="language-javascript">
  <code >
  ${code}
  </code>
  </pre>
  </div>
  <script >
    document.getElementById('${btnId}').addEventListener('click' , (e)=>{
     e.preventDefault();
     navigator.clipboard.writeText(\`${data.code}\`);
     document.getElementById('${btnId}').innerText = 'copied!';
     setTimeout(()=>{
      document.getElementById('${btnId}').innerText = 'copy';
     },5000)
    } )
  </script>
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

    <div class="overflow-x-auto max-w-[90vw] sm:max-w-[60vw]   my-4">
    <table class=" w-full divide-y divide-gray-200">
      <thead class="bg-gray-100 rounded-lg">
          <tr>
            ${theadArr
              .map((item) => {
                return `<th scope="col" class="px-6 w-full py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${item}</th>`;
              })
              .join("")}
          </tr>
        </thead>
        <tbody class=" divide-y rounded-lg ">
          ${tbodyArr
            .map((row) => {
              return `<tr>
              ${row
                .map((item) => {
                  return `<td class="w-full border tracking-wider text-sm py-4 px-4">${item}</td>`;
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
