"use client";

import React, { useRef, useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import GalleryPreview from "../dashboard/biograhpy/GalleryPreview";

const Gallery = ({
  galleryData,
  setGalleryData,
  isUpdate,
  galleryUrls,
  itemId,
  pathname,
  setCaptionArr,
}) => {
  const fileRef = useRef(null);
  const [isUpdateAndUploaded, setIsUpdateAndUploaded] = useState(false);
  const [caption, setCaption] = useState("");
  const [galleryUrlArr, setGalleryUrlArr] = useState(galleryUrls);

  const [uploadDisable, setUploadDisable] = useState(true);
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
  };

  return (
    <div className="flex flex-row  mt-2 w-full  gap-4 flex-wrap">
      <form
        className="flex flex-initial rounded-xl gap-4 h-[180px]  w-[200px] items-center border-2 flex-col 
      border-dashed border-white justify-center py-2 px-4"
      >
        <input
          accept="image/*"
          className="hidden"
          disabled={uploadDisable}
          onChange={handleChange}
          type="file"
          ref={fileRef}
        />
        <span
          onClick={handleClick}
          className={`flex ${
            !uploadDisable ? "cursor-pointer " : "text-gray-600"
          } items-center flex-col gap-2 justify-center`}
        >
          <AiFillPicture className="text-3xl" />
          Add Photo
        </span>

        <input
          className=" outline-none p-2 text-white  bg-zinc-700 w-full h-[20%] rounded-lg "
          type="text"
          value={caption}
          minLength={2}
          onChange={(e) => {
            setCaption(e.target.value);
            setUploadDisable(caption.length > 2 ? false : true);
          }}
          placeholder="Add caption to upload!"
        />
      </form>
      <GalleryPreview
        galleryData={galleryData}
        galleryUrls={galleryUrlArr}
        setGalleryUrlArr={setGalleryUrlArr}
        isUpdate={isUpdate}
        isUpdateAndUploaded={isUpdateAndUploaded}
        setGalleryData={setGalleryData}
        setCaptionArr={setCaptionArr}
        pathname={pathname}
        itemId={itemId}
      />
    </div>
  );
};

export default Gallery;
