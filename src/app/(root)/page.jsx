import BioContainerSSR from "@/components/root/biographies/BioContainerSSR";
import BlogContainerSSR from "@/components/root/blogs/BlogContainerSSR";
import GridContainer from "@/components/root/layout/GridContainer";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-[20px]  text-center sm:text-left px-4 text-gray-800 ">
          Popular Biographies
        </h1>
      </div>
      <GridContainer>
        <BioContainerSSR />
      </GridContainer>

      <div className="flex mt-6 items-center justify-between px-6">
        <hr className="w-full  border-gray-300 " />
        <Link
          className="text-sm rounded-xl w-full  text-gray-800 text-center py-1 border-gray-300 border "
          href={"/biographies"}
        >
          Show more
        </Link>
        <hr className="w-full  border-gray-300 " />
      </div>
      <div className="mt-4">
        <h1 className="text-[20px]  text-center sm:text-left px-4 text-gray-800 ">
          Latest blogs
        </h1>
      </div>

      <GridContainer>
        <BlogContainerSSR />
      </GridContainer>

      <div className="flex mt-2 items-center justify-between px-6">
        <hr className="w-full  border-gray-300 " />
        <Link
          className="text-sm rounded-xl w-full  text-gray-800 text-center py-1 border-gray-300 border "
          href={"/blogs"}
        >
          Show more
        </Link>
        <hr className="w-full  border-gray-300 " />
      </div>
    </>
  );
}
