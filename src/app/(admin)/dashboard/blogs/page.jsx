
const page = () => {
  return (
    <div className="grid grid-cols-12 w-full mx-auto gap-6 mt-5">
      <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
        <button className="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mr-2 shadow-md">
          {" "}
          Add New Category{" "}
        </button>
        <div className="relative">
          <button
            className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer px-2 !box"
            id="headlessui-menu-button-35"
            aria-haspopup="menu"
            aria-expanded="false"
            type="button"
          >
            <span className="flex items-center justify-center w-5 h-5">
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
                className="stroke-[1.3] w-4 h-4 w-4 h-4"
              >
                <line x1={12} y1={5} x2={12} y2={19} />
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
            </span>
          </button>
          {/**/}
        </div>
        <div className="hidden mx-auto md:block text-slate-500">
          {" "}
          Showing 1 to 10 of 150 entries{" "}
        </div>
        <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
          <div className="relative w-56 text-slate-500">
            <input
              className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-56 pr-10 !box"
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
              className="stroke-[1.3] absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-span-12 overflow-auto  intro-y lg:overflow-visible">
        <table className="w-full text-left border-spacing-y-[10px] border-separate -mt-2">
          <thead className="">
            <tr className="">
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                {" "}
                IMAGES{" "}
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                {" "}
                CATEGORY NAME{" "}
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                {" "}
                SLUG{" "}
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                {" "}
                STATUS{" "}
              </th>
              <th className="font-medium px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                {" "}
                ACTIONS{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="intro-x">
              <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                <div className="flex">
                  <div className="w-10 h-full cursor-zoom-in  ">
                    <img
                      className="cursor-pointer h-full w-full rounded-sm shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                      alt="Midone Tailwind HTML Admin Template"
                      src="/tech.png"
                    />
                  </div>

                </div>
              </td>
              <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                <a href="" className="font-medium whitespace-nowrap">
                  Kids &amp; Baby
                </a>
                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                  {" "}
                  Tags: Mothercare, Gini &amp; Jony, H&amp;M, Babyhug, Liliput
                </div>
              </td>
              <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md text-center bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                <a className="flex items-center mr-3 text-slate-500" href="#">
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
                    className="stroke-[1.3] w-4 h-4 mr-2 w-4 h-4 mr-2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1={10} y1={14} x2={21} y2={3} />
                  </svg>{" "}
                  /categories/kids-and-baby
                </a>
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
                    className="stroke-[1.3] w-4 h-4 mr-2 w-4 h-4 mr-2"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>{" "}
                  Active
                </div>
              </td>
              <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                <div className="flex items-center justify-center">
                  <a className="flex items-center mr-3" href="">
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
                      className="stroke-[1.3] w-4 h-4 mr-1 w-4 h-4 mr-1"
                    >
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>{" "}
                    Edit{" "}
                  </a>
                  <a className="flex items-center text-danger" href="#">
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
                      className="stroke-[1.3] w-4 h-4 mr-1 w-4 h-4 mr-1"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1={10} y1={11} x2={10} y2={17} />
                      <line x1={14} y1={11} x2={14} y2={17} />
                    </svg>{" "}
                    Delete{" "}
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
        <nav className="w-full sm:w-auto sm:mr-auto">
          <ul className="flex w-full mr-0 sm:w-auto sm:mr-auto">
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2  px-1 sm:px-3">
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
                  className="stroke-[1.3] w-4 h-4 w-4 h-4"
                >
                  <polyline points="11 17 6 12 11 7" />
                  <polyline points="18 17 13 12 18 7" />
                </svg>
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2  px-1 sm:px-3">
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
                  className="stroke-[1.3] w-4 h-4 w-4 h-4"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2  px-1 sm:px-3">
                ...
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2  px-1 sm:px-3">
                1
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none flex items-center justify-center border-transparent text-slate-800 sm:mr-2  px-1 sm:px-3 !box font-medium dark:bg-darkmode-400">
                2
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2  px-1 sm:px-3">
                3
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2  px-1 sm:px-3">
                ...
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2  px-1 sm:px-3">
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
                  className="stroke-[1.3] w-4 h-4 w-4 h-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </li>
            <li className="flex-1 sm:flex-initial">
              <a className="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2  px-1 sm:px-3">
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
                  className="stroke-[1.3] w-4 h-4 w-4 h-4"
                >
                  <polyline points="13 17 18 12 13 7" />
                  <polyline points="6 17 11 12 6 7" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <select className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 w-20 mt-3 !box sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
    </div>

  )
}

export default page
