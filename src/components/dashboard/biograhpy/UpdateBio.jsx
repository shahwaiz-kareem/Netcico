"use client";
import { getBioById } from "@/actions/bio.action";
import BioForm from "@/components/forms/BioForm";
import { useEffect, useState } from "react";

const UpdateBio = ({ params }) => {
  const [updateData, setUpdateData] = useState({
    title: "",
    slug: "",
    author: "",
    category: "",
    metaTitle: "",
    itemId: "",
    metaDescription: "",
    content: "{}",
    tags: "",
    thumbnail: "",
    altText: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const res = await getBioById(params._id);
      setUpdateData(res);
      setLoading(false);
    };
    getData();
  }, []);

  const {
    name,
    itemId,
    content,
    altText,
    slug,
    table,
    category,
    tags,
    metaDescription,
    metaTitle,
    gallery,
    author,
    thumbnail,
  } = updateData;

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center text-xl text-white">
          <span>loading...</span>
        </div>
      ) : (
        <BioForm
          isUpdate={true}
          itemId={itemId}
          updateAltText={altText}
          galleryUrls={gallery}
          updateCategory={category}
          updateMetaDescription={metaDescription}
          updateName={name}
          updateTable={table}
          updateMetaTitle={metaTitle}
          updateAuthor={author}
          updateSlug={slug}
          updateTags={tags}
          updateThumbnail={thumbnail}
          updateContent={content}
        />
      )}
    </>
  );
};

export default UpdateBio;
