"use client";
import { deleteImageFromGallery } from "@/actions/bio.action";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { AiFillDelete, AiFillPicture } from "react-icons/ai";

const Gallery = ({
  galleryData,
  setGalleryData,
  isUpdate,
  galleryUrls,
  itemId,
  pathname,
  captionArr,
  setCaptionArr,
}) => {
  const fileRef = useRef(null);
  const [isUpdateAndUploaded, setIsUpdateAndUploaded] = useState(false);
  const [caption, setCaption] = useState("");
  const router = useRouter();
  const handleClick = () => {
    fileRef.current.click();
  };
  const handleChange = (e) => {
    e.preventDefault();
    if (caption.length === 0) return;
    setCaptionArr((prevArr) => [...prevArr, caption]);
    const newFormData = galleryData;
    if (e.target.files[0].name !== "" && !isUpdate) {
      newFormData.append(`file`, e.target.files[0]);
    } else if (e.target.files[0].name !== "" && isUpdate) {
      setIsUpdateAndUploaded(true);
      newFormData.append(`file`, e.target.files[0]);
    }
    setGalleryData(newFormData);
    setCaption("");
    router.refresh();
  };

  const deleteFromGallery = async (index) => {
    if (isUpdate) {
      await deleteImageFromGallery(itemId, index, pathname);
    } else {
      const newFormData = galleryData;
      const files = newFormData.getAll("file");
      files.splice(index, 1);
      newFormData.delete("file");
      files.forEach((file) => {
        newFormData.append("file", file);
      });
      setGalleryData(newFormData);
      setCaptionArr((prev) => prev.filter((e, i) => i !== index));
    }
    router.refresh();
  };

  return (
    <div className="flex flex-row  mt-4 w-full gap-4  flex-wrap">
      <form
        className="flex flex-initial rounded-xl gap-4 h-[180px]  w-[200px] items-center border-2 flex-col 
      border-dashed border-white justify-center py-2 px-4"
      >
        <input
          className="hidden"
          onChange={handleChange}
          type="file"
          ref={fileRef}
        />
        <span
          onClick={handleClick}
          className="flex cursor-pointer items-center flex-col gap-2 justify-center"
        >
          <AiFillPicture className="text-3xl" />
          Add Photo
        </span>

        <input
          className=" outline-none p-2 text-black  w-full h-[20%] rounded-lg "
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Caption"
        />
      </form>

      {(isUpdate ? galleryUrls : galleryData.getAll(`file`)).map((e, index) => (
        <div key={index} className="h-[180px] w-[200px] relative">
          <img
            src={
              isUpdate
                ? `${process.env.NEXT_PUBLIC_HOST}${e.url}`
                : URL.createObjectURL(e)
            }
            alt={`Gallery Image ${index}`}
            className="h-full w-full rounded-xl"
          />
          <AiFillDelete
            onClick={() => deleteFromGallery(index)}
            className="cursor-pointer absolute text-3xl hover:text-red-500 hover:transition-transform shadow-lg top-0 right-0 mr-2 mt-1"
          />
        </div>
      ))}
      {isUpdateAndUploaded &&
        galleryData.getAll("file").map((e, index) => (
          <div key={index} className="h-[180px] w-[200px] relative">
            <img
              src={URL.createObjectURL(e)}
              alt={`Gallery Image ${index}`}
              className="h-full w-full rounded-xl"
            />
            <AiFillDelete
              onClick={() => deleteFromGallery(index)}
              className=" absolute text-3xl hover:text-red-500 hover:transition-transform shadow-lg top-0 right-0 mr-2 mt-1"
            />
          </div>
        ))}
    </div>
  );
};

export default Gallery;
