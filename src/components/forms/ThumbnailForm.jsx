"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useRef, useState } from "react";
import { AiFillPicture } from "react-icons/ai";

const ThumbnailForm = ({ isUpdate, updateThumbnailUrl }) => {
  const uploadInp = useRef(null);
  const context = useContext(ThemeContext);
  const { setThumbnailFormData, setThumbnailUrl, setUpdatedThumb } = context;
  const [thumbailImg, setThumbnailImg] = useState(
    isUpdate ? updateThumbnailUrl : ""
  );
  const [disabled, setdisabled] = useState(true);
  const [thumbailImgClass, setThumbnailImgClass] = useState(
    isUpdate ? "absolute" : "hidden"
  );

  function handleChange(e) {
    setThumbnailImg("");
    setThumbnailImg(URL.createObjectURL(e.target.files[0]));
    setThumbnailUrl(URL.createObjectURL(e.target.files[0]));
    setThumbnailImgClass("absolute");
    setdisabled(false);
  }

  const handleSubmit = async (data) => {
    setdisabled(data.get("file") ? true : false);
    setThumbnailFormData(data);
    isUpdate && setUpdatedThumb(true);
  };

  return (
    <form
      action={handleSubmit}
      className={
        "flex   cursor-pointer relative items-center rounded-lg flex-col justify-center  border-dashed border-2 "
      }
    >
      <div
        onClick={() => uploadInp.current.click()}
        className="flex relative w-[400px]  h-[220px]  flex-col items-center justify-center  gap-4 "
      >
        <AiFillPicture className=" h-10 w-10 mt-4" />
        <input
          ref={uploadInp}
          onChange={handleChange}
          type="file"
          name="file"
          className="hidden h-full"
        />
        <span className=" capitalize">Upload your thumbail</span>
        <div className="pt-1 overflow-hidden">
          <img
            className={
              " w-full h-full  rounded-lg left-0 top-0 " + thumbailImgClass
            }
            src={thumbailImg}
          />
        </div>
      </div>
      <button
        disabled={disabled}
        type="submit"
        className={
          "bg-blue-500 hover:bg-blue-400 disabled:text-whit shadow-xl w-[99%] absolute h-10 rounded bottom-0  disabled:bg-gray-800 disabled:text-white disabled:hover:bg-gray-800  disabled:cursor-default "
        }
      >
        Upload
      </button>
    </form>
  );
};

export default ThumbnailForm;
