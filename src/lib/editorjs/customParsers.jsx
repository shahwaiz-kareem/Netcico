import Prism from "prismjs";
import "prismjs/themes/prism.css";

export const codeBlockParser = ({ data }) => {
  let code = Prism.highlight(data.code, Prism.languages.javascript);

  return `

  <div class="code-toolbar">
  <pre className="language-javascript">
  <code >
  ${code}
  </code>
  </pre>
  </div>
  `;
};
