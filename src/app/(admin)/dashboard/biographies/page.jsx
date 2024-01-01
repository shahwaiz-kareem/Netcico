import Container from "@/components/dashboard/layout/Container"

import ThirdChild from "@/components/dashboard/layout/ThirdChild"

const page = () => {
  return (
    <Container>
      <h1 className="text-[30px] text-white">Biographies</h1>

      <div className="flex flex-col rounded-xl shadow-inner w-full items-center overflow-y-scroll  h-full  ">
        <table className="w-full text-left   border-spacing-y-[10px] border-separate -mt-2">
          <thead className=" bg-zinc-900 w-full">
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
          <tbody className=' '>
            {Object.keys(dataObj).map((element) => {
              console.log(element);
              return <tr className="intro-x">
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
                <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-zinc-900 border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0  before:block before:w-px before:h-8 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
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
            })
            }
          </tbody>
        </table>
      </div>
      <ThirdChild href={"/dashboard/biographies/create"} />
    </Container>
  )
}

export default page
