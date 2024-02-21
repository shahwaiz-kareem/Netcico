import BlogCard from "@/components/root/blogs/Card";
import Wrapper from "@/components/root/blogs/Wrapper";
import { getPopularBlogsByViews } from "@/actions/blog.action";
const BlogContainerSSR = async () => {
  const blogs = await getPopularBlogsByViews();
  return (
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
    </Wrapper>
  );
};

export default BlogContainerSSR;
