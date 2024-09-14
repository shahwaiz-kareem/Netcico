import BlogCard from "@/components/root/blogs/Card";
import { getPopularBlogsByViews } from "@/actions/blog.action";
const BlogContainerSSR = async () => {
  const blogs = await getPopularBlogsByViews();
  return (
    <>
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
      {blogs.length === 0 && (
        <div className="text-center mx-auto text-xl font-normal my-4">
          No post added yet!
        </div>
      )}
    </>
  );
};

export default BlogContainerSSR;
