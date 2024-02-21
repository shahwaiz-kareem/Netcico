import BioContainerSSR from "@/components/root/biographies/BioContainerSSR";
import BlogContainerSSR from "@/components/root/blogs/BlogContainerSSR";

export default async function Home() {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-[20px]  text-center sm:text-left px-4 text-gray-800 ">
          Popular Biographies
        </h1>
      </div>

      <BioContainerSSR />

      <div className="mt-4">
        <h1 className="text-[20px]  text-center sm:text-left px-4 text-gray-800 ">
          Latest blogs
        </h1>
      </div>

      <BlogContainerSSR />
    </>
  );
}
