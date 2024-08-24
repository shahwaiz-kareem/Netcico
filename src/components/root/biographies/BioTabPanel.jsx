import Reactions from "@/components/forms/Reactions";
import AsideBar from "../layout/AsideBar";
import EditorParser from "../layout/EditorParser";
import NewsletterBox from "@/components/forms/NewsletterBox";
import { countFansAndViews } from "@/actions/bio.action";

const BioTabPanel = async ({ data }) => {
  const { fansCount, viewsCount } = await countFansAndViews(
    data._id,
    `/biographies/${data.category}/${data.slug}`
  );

  return (
    <main className=" flex w-full relative max-[920px]:flex-col   gap-6 py-4 justify-between ">
      <article className="w-full flex items-center   justify-center  lg:pr-6">
        <EditorParser data={JSON.parse(data.content)} />
      </article>
      <AsideBar
        Onpage={"bio"}
        views={viewsCount}
        likesOrFans={fansCount}
        _id={data._id}
        slug={data.slug}
      />
      <div className="hidden bg-slate-50  max-[920px]:flex gap-2 flex-col items-center justify-center sm:pr-4">
        <Reactions
          Onpage={"bio"}
          likesOrFans={fansCount}
          views={viewsCount}
          _id={data._id}
          slug={data.slug}
        />

        <NewsletterBox Onpage={"bio"} slug={data.slug} />
      </div>
    </main>
  );
};

export default BioTabPanel;
