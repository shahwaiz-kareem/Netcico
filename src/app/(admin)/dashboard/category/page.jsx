"use client";
import { deleteCategory, getCategories } from "@/actions/category.action";
import Container from "@/components/dashboard/layout/Container";
import FilterCategory from "@/components/dashboard/layout/FilterCategory";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import "@/components/dashboard/layout/layout.css";
const Page = () => {
  const [filterBy, setFilterBy] = useState("all");
  const [dataObj, setDataObj] = useState({});
  const getData = async () => {
    const data = await getCategories(filterBy);
    setDataObj(data);
  };

  const handleDelete = async (_id) => {
    await deleteCategory(_id);
    await getData();
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [filterBy, setFilterBy]);

  return (
    <Container>
      <h1 className="text-[30px] text-white">Category</h1>
      <FilterCategory setFilterBy={setFilterBy} />
      <div className="flex flex-col rounded-xl shadow-inner w-full items-center overflow-y-scroll  h-full  ">
        <table className="w-full text-left  relative  border-spacing-y-[10px] border-separate -mt-2">
          <thead className=" sticky top-0  bg-zinc-900 w-full">
            <tr className="bg-zinc-900 py-2">
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                Category
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                Type
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap"></th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            {Object.keys(dataObj).map((e) => {
              let item = dataObj[e];
              return dataObj !== null ? (
                <tr key={item._id} className="intro-x">
                  <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <span className="font-medium whitespace-pre-wrap">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <span className="font-medium whitespace-pre-wrap">
                      {item.type}
                    </span>
                  </td>

                  <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"></td>
                  <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-zinc-900 border-b-0  bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0  before:block before:w-px before:h-8 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                    <div
                      onClick={() => handleDelete(item._id)}
                      className="flex items-center justify-center cursor-pointer"
                    >
                      <AiFillDelete className="text-xl text-white hover:text-red-500" />
                    </div>
                  </td>
                </tr>
              ) : (
                <div className="h-full w-full flex items-center justify-normal">
                  <span className="text-2xl text-white text-center">
                    404 Result not found!
                  </span>
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between w-full items-center ">
        <div className="inline-flex items-center justify-center rounded bg-zinc-800 py-1 text-white">
          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <span className="h-4 w-px bg-white/25" aria-hidden="true" />
          <div>
            <label htmlFor="PaginationPage" className="sr-only">
              Page
            </label>
            <input
              type="number"
              className="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium  "
              min={1}
              defaultValue={2}
              id="PaginationPage"
            />
          </div>
          <span className="h-4 w-px bg-white/25" />
          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-row-reverse justify-center items-center h-full gap-2 ">
          <Link href={"/dashboard/category/create"}>
            <button className="flex items-center justify-center p-2 border hover:text-black hover:bg-white rounded-lg ring-1">
              <BsPlus className="text-2xl font-bold " />
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default page;
