"use client";
import { deleteBlog } from "@/actions/blog.action";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { deleteBio } from "@/actions/bio.action";

const DeleteModal = ({ isBio, id, refreshPage, setFilterBy }) => {
  const pathname = usePathname();
  const modalRef = useRef();
  const deleteItem = async () => {
    setFilterBy("published");
    isBio ? await deleteBio(id, pathname) : await deleteBlog(id, pathname);
    modalRef.current.close();
    refreshPage();
  };
  return (
    <>
      <button
        onClick={() => modalRef.current.showModal()}
        className="flex hover:text-red-500  items-center gap-1 text-danger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-[1.3]  w-4 h-4 mr-1"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1={10} y1={11} x2={10} y2={17} />
          <line x1={14} y1={11} x2={14} y2={17} />
        </svg>
        Delete
      </button>
      <dialog
        className="bg-zinc-900 rounded-lg backdrop:bg-black backdrop:opacity-50 transition-transform"
        ref={modalRef}
      >
        <div className="flex flex-col  p-6  gap-10">
          <h3 className="text-2xl font-bold text-white ">
            Are you sure you want to delete the item?
          </h3>
          <div className="flex  justify-between">
            <button
              onClick={deleteItem}
              className="bg-red-600 text-white text-xl p-1 rounded-lg"
            >
              Delete
            </button>
            <button
              onClick={() => modalRef.current.close()}
              className="bg-green-500 text-white text-xl p-1 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteModal;
