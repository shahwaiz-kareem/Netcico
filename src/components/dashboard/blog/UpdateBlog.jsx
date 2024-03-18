"use client";
import { getBlogById } from "@/actions/blog.action";
import BlogForm from "@/components/forms/BlogForm ";
import { useEffect, useState } from "react";

const UpdateBlog = ({ params }) => {
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
      const res = await getBlogById(params._id);
      setUpdateData(res);
      setLoading(false);
    };
    getData();
  }, []);

  const {
    title,
    slug,
    author,
    category,
    metaTitle,
    metaDescription,
    content,
    tags,
    thumbnail,
    altText,
    itemId,
  } = updateData;

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <BlogForm
          isUpdate={true}
          updateTitle={title}
          itemId={itemId}
          updateSlug={slug}
          updateCategory={category}
          updateAuthor={author}
          updateMetaTitle={metaTitle}
          updateMetaDescription={metaDescription}
          updateTags={tags}
          updateThumbnail={thumbnail}
          updateAltText={altText}
          updateContent={content}
        />
      )}
    </>
  );
};

export default UpdateBlog;
