"use client";
import { getPopularBlogsByViews } from "@/actions/blog.action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import Image from "next/image";
let page = 1;
const LoadMore = () => {
  const { inView, ref } = useInView();
  const [data, setData] = useState([]);

  const getData = async (page) => {
    const newData = await getPopularBlogsByViews(page, 6);
    setData((prev) => [...prev, ...newData]);
  };

  useEffect(() => {
    page = 1;
  }, []);

  useEffect(() => {
    if (inView) {
      getData(page);
      page++;
    }
  }, [inView]);

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

      <section>
        <div ref={ref} className="flex w-[99vw] item-center justify-center">
          <Image src={"/snake.gif"} height={34} width={34} />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
