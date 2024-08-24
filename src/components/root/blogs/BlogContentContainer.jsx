import { getBlogBySlug } from "@/actions/blog.action";
import NewsletterBox from "@/components/forms/NewsletterBox";
import Reactions from "@/components/forms/Reactions";
import AsideBar from "@/components/root/layout/AsideBar";
import EditorParser from "@/components/root/layout/EditorParser";
const BlogContentContainer = async ({ slug }) => {
  const data = await getBlogBySlug(slug);

  return (
    <>
      <section className="flex flex-col   gap-4 px-2 lg:px-4 mt-6 w-full h-full">
        <div className="hidden lg:max-w-[61vw] divide-y divide-gray-200 tracking-wider  max-w-[90vw] sm:max-w-[60vw]"></div>
        <div className="flex items-center flex-wrap sm:gap-4">
          <h1 className="text-2xl inline">{data.title}</h1>
        </div>

        <main className="grid grid-cols-1 min-[920px]:flex w-full  h-full gap-2   justify-between ">
          <article className="w-full h-full pr-6">
            <EditorParser data={JSON.parse(data.content)} />
          </article>
          <AsideBar
            Onpage={"blogs"}
            _id={data._id}
            slug={data.slug}
            likesOrFans={data.likesCount}
            views={data.viewsCount}
          />
        </main>
        <div className="hidden bg-slate-50  max-[920px]:flex gap-2 flex-col items-center justify-center sm:pr-4">
          <Reactions
            Onpage={"blogs"}
            _id={data._id}
            slug={data.slug}
            likesOrFans={data.likesCount}
            views={data.viewsCount}
          />
          <NewsletterBox Onpage={"blogs"} slug={data.slug} />
        </div>
      </section>
    </>
  );
};

export default BlogContentContainer;
