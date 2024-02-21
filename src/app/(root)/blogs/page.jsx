import BlogContainerSSR from "@/components/root/blogs/BlogContainerSSR";

const page = () => {
  return (
    <>
      <div>
        <h1 className="text-[30px] text-center sm:text-left px-4 text-gray-800 ">
          Blogs
        </h1>
      </div>
      <BlogContainerSSR />
    </>
  );
};

export default page;
