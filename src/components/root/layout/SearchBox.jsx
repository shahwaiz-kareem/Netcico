"use client";

import { usePathname, useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const router = useRouter();
  const pathname = usePathname();

  let searchFor = "";
  const Page = pathname.split("/")[1];

  if (pathname === "/") {
    searchFor = "Biography";
  } else if (page === "blogs") {
    searchFor = "Blog";
  } else if (page === "forum") {
    searchFor = "Question";
  } else {
    searchFor = "Biography";
  }

  const submit = (e) => {
    e.preventDefault();
    if (e.target.search.value >= 3) return;
    router.push(
      `/search?search=${e.target.search.value}&searchfor=${searchFor}`
    );
  };

  return (
    <div className="w-[50%] max-sm:w-[50%] max-md:w-[70%] m-auto">
      <form
        onSubmit={submit}
        className="flex rounded-full border bg-white m-2 items-center"
      >
        <input
          className="outline-none px-4 w-full h-[42px] border-none  rounded-full"
          type="text"
          minLength={3}
          placeholder="search..."
          name="search"
        />
        <button type="submit" className="border rounded-r-full px-2 h-[42px]">
          <AiOutlineSearch className=" text-xl sm:text-2xl text-gray-800" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
