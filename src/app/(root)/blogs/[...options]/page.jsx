import {
  getBlogBySlug,
  getPublishedBlogsByCategory,
} from "@/actions/blog.action";
import BlogContentContainer from "@/components/root/blogs/BlogContentContainer";
import BlogCard from "@/components/root/blogs/Card";
import GridContainer from "@/components/root/layout/GridContainer";
import { headers } from "next/headers";

import { BsHeartbreakFill } from "react-icons/bs";

export async function generateMetadata({ params }) {
  console.log(params);
  const slug = params?.options[1];
  const data = await getBlogBySlug(slug);

  return {
    title: data.title || "Blog || Netcico",
    description:
      data.metaDescription ||
      "Read articles and blogs about technolgy, sports, cooking, travelling and etc.",
    openGraph: {
      title: data.title || "Blog || Netcico",

      description:
        data.metaDescription ||
        "Read articles and blogs about technolgy, sports, cooking, travelling and etc.",
      url: `${process.env.NEXT_PUBLIC_HOST}/${params.options[0]}/${slug}`,
      images: data.thumbnail
        ? [`${process.env.NEXT_PUBLIC_HOST}/${data.thumbnail}`]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title || "Blog || Netcico",

      description:
        data.metaDescription ||
        "Read articles and blogs about technolgy, sports, cooking, travelling and etc.",
      image: `${process.env.NEXT_PUBLIC_HOST}/${data.thumbnail}`,
    },
  };
}

const Page = async ({ params }) => {
  const blogs = await getPublishedBlogsByCategory(params.options[0]);

  const requestHeaders = headers();
  const token = requestHeaders.get("user-token");

  if (token) {
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/track/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "user-token": token,
        slug: params.options[1],
      },
    });
  }

  return (
    <>
      {params.options.length <= 1 ? (
        <>
          <div className=" mt-2">
            <span className=" flex flex-wrap items-center gap-2 text-xl  md:text-2xl   sm:text-left pl-4 text-gray-800 ">
              Blogs of {params.options[0]}
              <p className="text-sm"> ({blogs.length} results found)</p>
            </span>
          </div>
          <GridContainer>
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
          </GridContainer>
          {blogs.length === 0 ? (
            <div className=" flex items-center mt-12 justify-center gap-2  flex-col w-full h-full">
              <BsHeartbreakFill className="text-3xl " />
              <h3 className="text-xl  text-center ">
                Sorry, no post yet in this category!
              </h3>
            </div>
          ) : null}
        </>
      ) : (
        <BlogContentContainer slug={params.options[1]} />
      )}
    </>
  );
};

export default Page;
