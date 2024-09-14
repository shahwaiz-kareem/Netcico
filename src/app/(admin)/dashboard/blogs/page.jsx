"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "@/components/dashboard/layout/layout.css";
import {
  getAllBlogs,
  getDraftBlogs,
  getPopularBlogsByViews,
  getPublishedBlogs,
} from "@/actions/blog.action";
import Container from "@/components/dashboard/layout/Container";
import ThirdChild from "@/components/dashboard/layout/ThirdChild";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDraftLine } from "react-icons/ri";
import { MdPublish } from "react-icons/md";
import Image from "next/image";
import DeleteModal from "@/components/dashboard/layout/DeleteModal";
import { useRouter } from "next/navigation";
import FilterSearch from "@/components/dashboard/layout/FilterSearch";

const Page = () => {
  const [filterBy, setFilterBy] = useState("all");
  const [searchQuery, setSearchQuery] = useState();
  const [dataObj, setDataObj] = useState({});
  const router = useRouter();

  const refreshPage = () => {
    router.refresh();
    setFilterBy("all");
  };

  const getData = async () => {
    if (filterBy === "all") {
      const allBlogs = await getAllBlogs();
      setDataObj(allBlogs);
    } else if (filterBy === "published") {
      const publishedBlogs = await getPublishedBlogs();
      setDataObj(publishedBlogs);
    } else if (filterBy === "draft") {
      const draftBlogs = await getDraftBlogs();
      setDataObj(draftBlogs);
    } else if (filterBy === "popular") {
      const popularBlogs = await getPopularBlogsByViews();
      setDataObj(popularBlogs);
    }
  };

  useEffect(() => {
    (async () => await getData())();
  }, []);

  useEffect(() => {
    const renderData = async () => {
      if (searchQuery == "") return await getData();
      const newData = Array.from(dataObj).filter((item) =>
        item.title.toLowerCase().includes(searchQuery)
      );
      setDataObj(newData);
    };
    renderData();
  }, [setSearchQuery, searchQuery]);

  useEffect(() => {
    (async () => await getData())();
    setSearchQuery(null);
  }, [setFilterBy, filterBy]);

  return (
    <Container>
      <h1 className="text-[30px] text-white">Blogs</h1>
      <FilterSearch setFilterBy={setFilterBy} setSearchQuery={setSearchQuery} />
      <div className="flex flex-col rounded-xl shadow-inner w-full items-center overflow-y-scroll  h-full  ">
        <table className="w-full text-left  relative  border-spacing-y-[10px] border-separate -mt-2">
          <thead className=" sticky top-0  bg-zinc-900 w-full">
            <tr className="py-2">
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                Thumbnail
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                Title
              </th>

              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                Category
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                Likes
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                Views
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                Share
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                Status
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            {Object.keys(dataObj).map((e) => {
              let item = dataObj[e];
              return dataObj !== null ? (
                <tr key={item._id} className="intro-x">
                  <td className="px-5 py-3    w-40 bg-zinc-900 bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <div className="flex">
                      <div className="w-10 h-full cursor-zoom-in  ">
                        <Image
                          width={40}
                          height={80}
                          className="cursor-pointer h-full w-full rounded  "
                          alt={item.altText}
                          src={item.thumbnail}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <Link
                      href={`/blogs/${item.slug}`}
                      className="font-bold whitespace-nowrap"
                    >
                      <p className="whitespace-pre-wrap">{item.title}</p>
                    </Link>
                  </td>

                  <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <span className="font-medium whitespace-pre-wrap">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <span className="font-medium whitespace-pre-wrap">
                      {item.likes.length}
                    </span>
                  </td>
                  <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <span className="font-medium whitespace-pre-wrap">
                      {item.views.length}
                    </span>
                  </td>
                  <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <span className="font-medium whitespace-pre-wrap">
                      {item.share.length}
                    </span>
                  </td>

                  <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                    <div className="flex items-center  gap-2  text-lg justify-center text-success">
                      {item.isActive ? <MdPublish /> : <RiDraftLine />}
                      <span
                        className={
                          item.isActive ? "text-green-500" : "text-orange-500"
                        }
                      >
                        {item.isActive ? "Published" : "Draft"}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-zinc-900 border-b-0  bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0  before:block before:w-px before:h-8 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                    <div className="flex items-center justify-center">
                      <Link
                        href={`/dashboard/blogs/update/${item._id}`}
                        className="flex hover:text-yellow-500 items-center gap-1 mr-3"
                      >
                        <AiOutlineEdit />
                        <span className="font-medium whitespace-pre-wrap">
                          Edit
                        </span>
                      </Link>
                      <DeleteModal
                        refreshPage={refreshPage}
                        setFilterBy={setFilterBy}
                        id={item._id}
                      />
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
      <ThirdChild href={"/dashboard/blogs/create"} />
    </Container>
  );
};

export default page;
