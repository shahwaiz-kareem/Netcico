"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import { LuImageOff } from "react-icons/lu";
const BioGalleryTabPanel = ({ data }) => {
  const modalRef = useRef();

  const [galleryItem, setGalleryItem] = useState({
    caption: "",
    url: "",
  });

  const showModal = (item) => {
    modalRef.current.showModal();
    setGalleryItem(item);
  };
  const closeModal = () => {
    modalRef.current.close();
    setGalleryItem({
      caption: "",
      url: "",
    });
  };

  return (
    <>
      <dialog
        className=" rounded-lg md:h-[80%] outline-none md:w-[80%] bg-gray-100 mx-auto pb-2 pt-4 px-2 my-auto"
        ref={modalRef}
      >
        <div className="flex  flex-col gap-2 outline-none relative h-full  ">
          <div className="flex justify-between sticky top-0   bg-gray-100 ">
            <h2 className=" font-bold">{galleryItem.caption}</h2>
            <span
              className="text-2xl cursor-pointer text-red-500 hover:text-red-600"
              onClick={closeModal}
            >
              <IoCloseCircle />
            </span>
          </div>

          <div className="  overflow-auto">
            <img
              src={galleryItem.url}
              alt={galleryItem.caption}
              className="w-full "
            />
          </div>
        </div>
      </dialog>
      {data.length === 0 ? (
        <div className="h-full w-full flex items-center mt-12 justify-center">
          <span className="flex gap-2 items-center justify-center ">
            <LuImageOff />
            Sorry! no image to display...
          </span>
        </div>
      ) : (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {data.map((item) => (
              <div
                onClick={() => showModal(item)}
                key={item._id}
                className="flex w-1/3 flex-wrap"
              >
                <div className="w-full cursor-pointer p-1 md:p-2">
                  <Image
                    alt={item.caption}
                    height={"500"}
                    width={"500"}
                    className="block h-full  w-full rounded-lg object-cover object-center"
                    src={item.url}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BioGalleryTabPanel;
