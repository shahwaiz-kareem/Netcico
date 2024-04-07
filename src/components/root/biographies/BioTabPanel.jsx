import AsideBar from "../layout/AsideBar";
import EditorParser from "../layout/EditorParser";

const BioTabPanel = ({ data }) => {
  return (
    <main className=" flex w-full relative  gap-2 py-4 justify-between ">
      <article className="w-full  pr-6">
        <EditorParser data={JSON.parse(data.content)} />
      </article>
      <AsideBar
        Onpage={"bio"}
        likesOrFans={data.fans.length}
        views={data.views.length}
        share={data.share.length}
      />
    </main>
  );
};

export default BioTabPanel;
