const FilterCategory = ({ setFilterBy }) => {
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
            value={"blogs"}
            className=" block rounded-md  w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer"
          >
            Blogs
          </option>
          <option
            value={"biographies"}
            className=" block rounded-md  w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer"
          >
            Biographies
          </option>
          <option
            value={"forum"}
            className=" block rounded-md  w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer"
          >
            Forum
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterCategory;
