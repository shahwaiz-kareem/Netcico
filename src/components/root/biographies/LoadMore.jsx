"use client";
import { getPopularBiosByViews } from "@/actions/bio.action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import Image from "next/image";
let page = 1;
const LoadMore = () => {
  const { inView, ref } = useInView();
  const [data, setData] = useState([]);

  const getData = async (page) => {
    const newData = await getPopularBiosByViews(page, 6);
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
      {data.map((bio) => (
        <Card
          name={bio.name}
          fans={bio.fans.length}
          slug={bio.slug}
          views={bio.views.length}
          share={bio.share.length}
          thumbnail={bio.thumbnail}
          key={bio._id}
          category={bio.category}
          altText={bio.altText}
        ></Card>
      ))}

      <section>
        <div ref={ref} className="flex w-[99vw] item-center justify-center">
          <Image src={"/snake.gif"} height={34} width={34} />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
