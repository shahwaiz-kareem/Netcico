const FilterSearch = ({ setFilterBy, setSearchQuery }) => {
  return (
    <div className="flex  items-center w-full gap-2  justify-between ">
      <div>
        <select
          onClick={(e) => setFilterBy(e.target.value)}
          className={`p-2  flex gap-2 outline-none  max-sm:left-10 left-28  mt-2 w-48 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5 }`}
        >
          <option
            value={"all"}
            className=" block rounded-md  w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer"
          >
            All
          </option>
          <option
            value={"published"}
            className=" block rounded-md  w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer"
          >
            Published
          </option>
          <option
            value={"draft"}
            className=" block rounded-md w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer"
          >
            Drafts
          </option>
          <option
            value={"popular"}
            className=" block rounded-md w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer"
          >
            Popular
          </option>
        </select>
      </div>
      <div className=" mt-3 h-full sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
        <div className="relative w-56 text-slate-500">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
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
  );
};

export default FilterSearch;
