import { MdDiversity3 } from "react-icons/md";

const BioTablePanel = ({ tableData }) => {
  const headings = [];
  const contents = [];

  tableData.map((item) => {
    headings.push(item.heading);
    contents.push(item.content);
  });

  return (
    <div className="flex w-full  mt-2 ">
      <div className="flex flex-col flex-wrap border  w-[50%] gap-4  p-4  ">
        {headings.map((heading) => (
          <div key={heading + Math.floor(Math.random() * 9999)}>
            <div className="font-bold flex flex-wrap">{heading}</div>
            <hr />
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-wrap w-full gap-4  p-4 border  justify-center">
        {contents.map((content, index) => (
          <div key={index}>
            <div className="flex flex-wrap">{content}</div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BioTablePanel;
