import BlogContainerSSR from "@/components/root/blogs/BlogContainerSSR";
import LoadMore from "@/components/root/blogs/LoadMore";
import GridContainer from "@/components/root/layout/GridContainer";

export const metadata = {
  title: "Blog || Netcico",
  description:
    "Read articles and blogs about technolgy, sports, cooking, travelling and etc.",
};

const Page = () => {
  return (
    <>
      <div>
        <h1 className="text-[30px] text-center sm:text-left px-4 text-gray-800 ">
          Blogs
        </h1>
      </div>
      <GridContainer>
        <BlogContainerSSR />
        <LoadMore />
      </GridContainer>
    </>
  );
};

export default page;
