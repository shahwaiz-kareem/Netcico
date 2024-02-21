import { getPublishedBlogsByCategory } from "@/actions/blog.action";
import BlogCard from "@/components/root/blogs/Card";
import Wrapper from "@/components/root/blogs/Wrapper";

import { BsHeartbreakFill } from "react-icons/bs";

export const metadata = {
  title: "Blogs || Netcico",
  description: "Read amazing articles published on netcico ",
};

const Page = async ({ params }) => {
  const blogs = await getPublishedBlogsByCategory(params.category);

  return (
    <>
      <div className=" mt-2">
        <span className=" flex flex-wrap items-center gap-2 text-xl  md:text-2xl   sm:text-left pl-4 text-gray-800 ">
          Blogs of {params.category}
          <p className="text-sm"> ({blogs.length} results found)</p>
        </span>
      </div>
      <Wrapper>
        {blogs.map((blog) => {
          const {
            thumbnail,
            title,
            category,
            likes,
            views,
            author,
            _id,
            altText,
            slug,
            share,
            updatedAt,
            metaDescription,
          } = blog;
          return (
            <BlogCard
              title={title}
              category={category}
              thumbnail={thumbnail}
              slug={slug}
              share={share.length}
              altText={altText}
              author={author}
              likes={likes.length}
              metaDescription={metaDescription}
              updatedAt={updatedAt}
              views={views.length}
              key={_id}
            />
          );
        })}
        {blogs.length === 0 ? (
          <div className=" flex items-center mt-12 justify-center gap-2  flex-col w-full h-full">
            <BsHeartbreakFill className="text-3xl " />
            <h3 className="text-xl  text-center ">
              Sorry, no post yet in this category!
            </h3>
          </div>
        ) : null}
      </Wrapper>
    </>
  );
};

export default Page;
