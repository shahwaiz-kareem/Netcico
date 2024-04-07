"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";

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
        className=" rounded-lg sm:h-[80%]  sm:w-[80%] bg-gray-100 mx-auto  pt-4 px-2 my-auto"
        ref={modalRef}
      >
        <div className="flex  flex-col   relative h-full  ">
          <div className="flex justify-between sticky top-0   bg-gray-100 ">
            <h2 className=" font-bold">{galleryItem.caption}</h2>
            <span
              className="text-2xl cursor-pointer text-red-500 hover:text-red-600"
              onClick={closeModal}
            >
              <IoCloseCircle />
            </span>
          </div>
          <hr />
          <div className="  overflow-auto">
            <img
              src={galleryItem.url}
              alt={galleryItem.caption}
              className="w-full "
            />
          </div>
        </div>
      </dialog>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {data.map((item) => (
            <div
              onClick={() => showModal(item)}
              key={item._id}
              className="flex w-1/3 flex-wrap"
            >
              <div className="w-full p-1 md:p-2">
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
    </>
  );
};

export default BioGalleryTabPanel;
