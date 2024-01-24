import { getBioById } from "@/actions/bio.action";
import BioForm from "@/components/forms/BioForm";

const page = async ({ params }) => {
  const data = await getBioById(params._id);
  const {
    name,
    itemId,
    content,
    altText,
    slug,
    category,
    tags,
    metaDescription,
    metaTitle,
    gallery,
    author,
    thumbnail,
  } = data;

  return (
    <BioForm
      isUpdate={true}
      itemId={itemId}
      updateAltText={altText}
      galleryUrls={gallery}
      updateCategory={category}
      updateMetaDescription={metaDescription}
      updateName={name}
      updateMetaTitle={metaTitle}
      updateAuthor={author}
      updateSlug={slug}
      updateTags={tags}
      updateThumbnail={thumbnail}
      updateContent={content}
    />
  );
};

export default page;
