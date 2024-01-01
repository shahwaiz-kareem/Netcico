import Link from "next/link"
import { BsPlus } from "react-icons/bs"



const ThirdChild = ({ href }) => {
  return (
    <div className="flex justify-between w-full items-center ">

      <div className="inline-flex items-center justify-center rounded bg-zinc-800 py-1 text-white">
        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180">
          <span className="sr-only">Prev Page</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </a>
        <span className="h-4 w-px bg-white/25" aria-hidden="true" />
        <div>
          <label htmlFor="PaginationPage" className="sr-only">Page</label>
          <input type="number" className="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" min={1} defaultValue={2} id="PaginationPage" />
        </div>
        <span className="h-4 w-px bg-white/25" />
        <a href="#" className="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180">
          <span className="sr-only">Next Page</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

      <div className='flex flex-row-reverse justify-center items-center h-full gap-2 '>
        <button className="flex items-center justify-center p-2 border hover:text-black hover:bg-white rounded-lg ring-1">
          Add New Category
        </button>
        <Link href={href}>
          <button className="flex items-center justify-center p-2 border hover:text-black hover:bg-white rounded-lg ring-1">
            <BsPlus className="text-2xl font-bold " />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ThirdChild
