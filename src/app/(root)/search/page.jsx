"use client";
import QuestionCard from "@/components/root/forum/QuestionCard";
import BioCard from "@/components/root/biographies/Card";
import BlogCard from "@/components/root/blogs/Card";
import InfoBar from "@/components/root/search/InfoBar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadMoreResults from "@/components/root/search/LoadMoreResults";
import { searchBio } from "@/actions/bio.action";
import { searchBlog } from "@/actions/blog.action";
import { searchQuestion } from "@/actions/forum.action";
import { BsHeartbreakFill } from "react-icons/bs";
import Image from "next/image";

const page = () => {
  const params = useSearchParams();
  const query = params.get("search");
  const defaultSearchType = params.get("searchfor");

  const [searchType, setSearchType] = useState(
    defaultSearchType || "Biography"
  );
  const [hasMoreData, setHasMoreData] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [data, setData] = useState([]);
  const colors = [
    "bg-orange-500",
    "bg-green-800",
    "bg-blue-800",
    "bg-yellow-800",
    "bg-purple-500",
  ];
  const searchData = async (page, limit) => {
    if (
      !query ||
      !defaultSearchType ||
      query === "" ||
      defaultSearchType === ""
    )
      return;
    setShowLoader(true);
    if (searchType === "Biography") {
      const res = await searchBio(page, limit, query);
      setHasMoreData(res.length > 0);
      setData((prev) => [...prev, ...res]);
    } else if (searchType === "Blog") {
      const res = await searchBlog(page, limit, query);

      setHasMoreData(res.length > 0);
      setData((prev) => [...prev, ...res]);
    } else if (searchType === "Question") {
      const res = await searchQuestion(page, limit, query);
      setData((prev) => [...prev, ...res]);
      setHasMoreData(res.length > 0);
    }
    setShowLoader(false);
  };
  useEffect(() => {
    setData([]);

    searchData(1, 6);
  }, [searchType, query]);

  return (
    <div className="px-2 md:px-4">
      <InfoBar searchType={searchType} setSearchType={setSearchType} />
      <div
        className={`grid grid-cols-1 gap-4 md:w-1/2 py-4 ${
          searchType !== "Question" &&
          "md:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-4 md:w-full"
        }`}
      >
        {searchType === "Biography" ? (
          <>
            {data.map((bio) => (
              <BioCard
                key={bio._id}
                name={bio.name}
                slug={bio.slug}
                fans={bio.fansCount}
                views={bio.viewsCount}
                thumbnail={bio.thumbnail}
                category={bio.category}
                altText={bio.altText}
              ></BioCard>
            ))}
          </>
        ) : null}
        {searchType === "Blog" && (
          <>
            {data.map((item) => (
              <BlogCard
                title={item.title}
                key={item._id}
                category={item.category}
                thumbnail={item.thumbnail}
                slug={item.slug}
                share={0}
                altText={item.altText}
                author={item.author}
                likes={item.likesCount}
                metaDescription={item.metaDescription}
                updatedAt={item.updatedAt}
                views={item.viewsCount}
              />
            ))}
          </>
        )}
        {searchType === "Question" && (
          <>
            {data.map((document) => (
              <Link
                key={document._id}
                href={`/forum/${document.category}/${document._id}`}
              >
                <QuestionCard
                  name={document.name}
                  date={document.createdAt}
                  question={document.text}
                  ansCount={document.ansCount}
                  color={colors[Math.floor(Math.random() * 5)]}
                  category={document.category}
                />
              </Link>
            ))}
          </>
        )}
      </div>
      {showLoader && query && (
        <span
          className={`pt-12 flex items-center flex-col gap-2 justify-center ${
            searchType === "Question" ? "w-1/2" : "w-full"
          } `}
        >
          <Image src={"/snake.gif"} alt="...loading" height={34} width={34} />
          <span className="text-sm">...searching</span>
        </span>
      )}
      {data.length === 0 && !hasMoreData ? (
        <div className=" flex items-center mt-12 justify-center gap-2  flex-col w-full h-full">
          <BsHeartbreakFill className="text-2xl " />
          <h3 className="text-xl  text-center ">No result found!</h3>
        </div>
      ) : null}
      {!query ||
      !defaultSearchType ||
      query === "" ||
      defaultSearchType === "" ? (
        <div className=" flex items-center mt-12 justify-center gap-2  flex-col w-full h-full">
          <h3 className="text-md  text-center ">
            Type something in search box to search...
          </h3>
        </div>
      ) : null}
      <div
        className={` flex mt-2 items-center flex-col gap-2 justify-center ${
          searchType === "Question" ? "w-1/2 " : "w-full"
        } `}
      >
        {data.length !== 0 && hasMoreData && (
          <LoadMoreResults getData={searchData} />
        )}
      </div>
    </div>
  );
};

export default page;
