"use client";

import { getAnswers } from "@/actions/forum.action";
import { useEffect, useRef, useState } from "react";
import AnswerCard from "./AnswerCard";
import Image from "next/image";
let page = 2;
const LoadAnswers = ({ _id, colors }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef();

  useEffect(() => {
    page = 2;
  }, []);

  const handleClick = async () => {
    setIsLoading(true);
    const data = await getAnswers(_id, page, 6);
    console.log(data.answers);
    if (!data.answers) {
      ref.current.classList.add("hidden");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setData((prev) => [...prev, ...data.answers]);
    page++;
  };
  return (
    <>
      {data.map((document) => (
        <AnswerCard
          key={document._id}
          _id={document._id}
          name={document.name}
          answer={document.text}
          color={colors[Math.floor(Math.random() * 5)]}
          date={document.createdAt}
          votesCount={document.votesCount}
        />
      ))}
      <div className="flex flex-col gap-4  w-full">
        <div className="flex w-full  items-center justify-center">
          {isLoading && <Image src={"/snake.gif"} height={34} width={34} />}
        </div>
        <div className="mx-auto md:mx-0">
          <button
            onClick={handleClick}
            ref={ref}
            className="bg-[#1970d5] hover:bg-blue-500 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default LoadAnswers;
