"use client";
import { getPopularBlogsByViews } from "@/actions/blog.action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import Image from "next/image";
let page = 2;
const LoadMore = () => {
  const { inView, ref } = useInView();
  const [data, setData] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);

  const getData = async (page) => {
    const newData = await getPopularBlogsByViews(page, 6);
    if (newData.length === 0) {
      setHasMoreData(false);
    } else {
      setData((prev) => [...prev, ...newData]);
    }
  };

  useEffect(() => {
    if (inView && hasMoreData) {
      getData(page);
      page++;
    }
  }, [inView, hasMoreData]);

  return (
    <>
      {data.map(
        ({
          title,
          category,
          thumbnail,
          slug,
          share,
          altText,
          author,
          likes,
          metaDescription,
          updatedAt,
          views,
          _id,
        }) => (
          <Card
            title={title}
            category={category}
            thumbnail={thumbnail}
            slug={slug}
            share={share.length}
            altText={altText}
            author={author}
            likes={likes.length}
            metaDescription={metaDescription}
            updatedAt={updatedAt}
            views={views.length}
            key={_id}
          />
        )
      )}
      {hasMoreData && (
        <div
          ref={ref}
          className=" flex pt-2 justify-center items-center w-full md:w-auto lg:w-full sm:col-start-1  lg:col-start-2 sm:col-end-2 md:col-end-3 lg:col-end-3 "
        >
          <Image src={"/snake.gif"} height={34} width={34} />
        </div>
      )}
    </>
  );
};

export default LoadMore;