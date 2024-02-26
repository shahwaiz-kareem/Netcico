import { getBlogBySlug } from "@/actions/blog.action";
import AsideBar from "@/components/root/layout/AsideBar";
import EditorParser from "@/components/root/layout/EditorParser";

const Page = async ({ params }) => {
  const data = await getBlogBySlug(params.slug);
  return (
    <>
      <section className="flex flex-col   gap-4 px-2 lg:px-4 mt-6 w-full h-full">
        <div className="flex items-center flex-wrap sm:gap-4">
          <h1 className="text-2xl inline">{data.title}</h1>
          <p className="mt-1 inline text-xs text-gray-600">(9 minutes read)</p>
        </div>

        <main className=" flex w-full  h-full gap-2   justify-between ">
          <article className="w-full h-full pr-6">
            <EditorParser data={JSON.parse(data.content)} />
          </article>
          <AsideBar
            Onpage={"blogs"}
            likesOrFans={data.likes.length}
            views={data.views.length}
            share={data.share.length}
          />
        </main>
      </section>
    </>
  );
};

export default Page;
