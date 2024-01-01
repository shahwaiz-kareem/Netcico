
import { getBlogById } from "@/actions/blog.action"
import BlogForm from "@/components/forms/BlogForm "



const page = async ({ params }) => {

  const data = await getBlogById(params._id)
  const { title, itemId, content, altText, slug, category, tags, metaDescription, metaTitle, author, thumbnail } = data

  return (
    <BlogForm isUpdate={true} itemId={itemId} updateAltText={altText} updateAuthor={author} updateCategory={category} updateMetaDescription={metaDescription} updateTitle={title} updateMetaTitle={metaTitle} updateSlug={slug} updateTags={tags} updateThumbnail={thumbnail} updateContent={content} />
  )
}

export default page
