"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import "@/components/dashboard/layout/layout.css"
import { getAllBlogs, getDraftBlogs, getPopularBlogs, getPublishedBlogs, } from "@/actions/blog.action"
import Container from "@/components/dashboard/layout/Container"
import ThirdChild from "@/components/dashboard/layout/ThirdChild";


const page = () => {

  const [filterBy, setFilterBy] = useState("all");
  const [searchQuery, setSearchQuery] = useState(null);
  const [dataObj, setDataObj] = useState({});
  const [previousData, setPreviousData] = useState(dataObj);


  useEffect(() => {
    const newData = Array.from(dataObj).filter((item) => item.title.toLowerCase().includes(searchQuery));
    console.log(typeof searchQuery, searchQuery, previousData);
    if (searchQuery === "") return setDataObj(previousData)
    setDataObj(newData)
  }, [setSearchQuery, searchQuery])


  useEffect(() => {
    const getData = async () => {

      if (filterBy === "all") {
        const allBlogs = await getAllBlogs()
        setDataObj(allBlogs);

      }

      else if (filterBy === "published") {
        const publishedBlogs = await getPublishedBlogs()

        setDataObj(publishedBlogs);

      }
      else if (filterBy === "draft") {
        const draftBlogs = await getDraftBlogs()
        setDataObj(draftBlogs);
      }
      else if (filterBy === "popular") {
        const popularBlogs = await getPopularBlogs()
        setDataObj(popularBlogs);
      }
    }
    getData()
    setSearchQuery(null)
    setPreviousData(dataObj)
  }, [setFilterBy, filterBy])

  return (
    <Container>
      <h1 className="text-[30px] text-white">Blogs</h1>
      <div className="flex  items-center w-full gap-2  justify-between ">
        <div >
          <select onClick={(e) => setFilterBy(e.target.value)} className={`p-2  flex gap-2 outline-none  max-sm:left-10 left-28  mt-2 w-48 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5 }`}  >
            <option value={"all"} className=" block rounded-md  w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer">All</option>
            <option value={"published"} className=" block rounded-md  w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer">Published</option>
            <option value={"draft"} className=" block rounded-md w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer">Drafts</option>
            <option value={"popular"} className=" block rounded-md w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer">Popular</option>
          </select>

        </div>
        <div className=" mt-3 h-full sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
          <div className="relative w-56 text-slate-500">
            <input onChange={(e) => setSearchQuery(e.target.value)}
              className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm   rounded-md p-1 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent focus:ring-slate-700 dark:focus:ring-opacity-50 placeholder:text-slate-500/80 w-56 pr-10 !box"
              type="text"
              placeholder="Search..."
            />
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
              className="stroke-[1.3] absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3 "
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
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
          <tbody className=' '>
            {Object.keys(dataObj).map((e) => {
              let element = dataObj[e]
              return dataObj !== null ? <tr key={element._id} className="intro-x">
                <td className="px-5 py-3    w-40 bg-zinc-900 bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <div className="flex">
                    <div className="w-10 h-full cursor-zoom-in  ">
                      <img
                        className="cursor-pointer h-full w-full rounded  "
                        alt="Midone Tailwind HTML Admin Template"
                        src={element.thumbnail}
                      />
                    </div>

                  </div>
                </td>
                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <Link href={`/blogs/${element.slug}`} className="font-bold whitespace-nowrap">
                    <p className="whitespace-pre-wrap">
                      {element.title}
                    </p>
                  </Link>
                </td>

                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <span className="font-medium whitespace-pre-wrap">
                    {element.category}
                  </span>
                </td>
                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <span className="font-medium whitespace-pre-wrap">
                    {element.likes.length}
                  </span>
                </td>
                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <span className="font-medium whitespace-pre-wrap">
                    {element.views.length}
                  </span>
                </td>
                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <span className="font-medium whitespace-pre-wrap">
                    {element.share.length}
                  </span>
                </td>

                <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                  <div className="flex items-center justify-center text-success">
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
                      className="stroke-[1.3] w-4 h-4 mr-2 "
                    >
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>{" "}
                    <span className={element.isActive ? "text-green-500" : "text-orange-500"} >
                      {element.isActive ? "Published" : "Draft"}
                    </span>
                  </div>
                </td>
                <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-zinc-900 border-b-0  bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0  before:block before:w-px before:h-8 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                  <div className="flex items-center justify-center">
                    <Link href={`/dashboard/blogs/update/${element._id}`} className="flex hover:text-yellow-500 items-center gap-1 mr-3" >
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
                        className="stroke-[1.3] w-4 h-4 mr-1 "
                      >
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <span className="font-medium whitespace-pre-wrap">
                        Edit
                      </span>
                    </Link>
                    <a className="flex hover:text-red-500  items-center gap-1 text-danger" href="#">
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
                    </a>
                  </div>
                </td>
              </tr> : <div className="h-full w-full flex items-center justify-normal">
                <span className="text-2xl text-white text-center">
                  404 Result not found!
                </span>
              </div>
            })
            }
          </tbody>
        </table>
      </div>
      <ThirdChild href={"/dashboard/blogs/create"} />
    </Container>
  )
}

export default page
