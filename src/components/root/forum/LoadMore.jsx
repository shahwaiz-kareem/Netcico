"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getParentQuestions } from "@/actions/forum.action";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
let page = 2;
const LoadMore = ({ isDataEmpty, colors }) => {
  const { inView, ref } = useInView();
  const [data, setData] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);

  const getData = async (page) => {
    const newData = await getParentQuestions(page, 6);

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
      {isDataEmpty ? (
        <div className=" flex items-center justify-center gap-1 flex-col ">
          <span className="font-medium mt-2 text-center">
            Sorry! no question asked yet.
          </span>
          <Link href={"/"} className="text-blue-500 underline">
            Go to home page
          </Link>
        </div>
      ) : null}

      {data.map((document) => (
        <Link
          className="lg:w-1/2"
          key={document._id}
          href={`/forum/${document._id}`}
        >
          <QuestionCard
            _id={document._id}
            name={document.name}
            color={colors[Math.floor(Math.random() * 5)]}
            date={document.createdAt}
            question={document.text}
            ansCount={document.ansCount}
            category={document.category}
          />
        </Link>
      ))}

      <div className="flex-end">
        {hasMoreData && (
          <div
            ref={ref}
            className=" flex pt-2 items-center justify-center  w-full sm:w-[50%] "
          >
            <Image src={"/snake.gif"} height={34} width={34} />
          </div>
        )}
      </div>
    </>
  );
};

export default LoadMore;
