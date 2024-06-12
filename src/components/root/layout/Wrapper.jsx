"use client";
import React, { useEffect, useRef, useState } from "react";
import Chip from "./Chip";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCategories } from "@/actions/category.action";

const Wrapper = () => {
  const [categories, setCategories] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollRight, setScrollRight] = useState(0);
  const pathname = usePathname();
  const onPage = pathname.split("/")[1];
  const currentCategory = pathname.split("/")[2];

  const getCategoriesFromDb = async () => {
    const dbCategories = await getCategories(pathname === "/" ? "all" : onPage);
    setCategories(dbCategories);
  };

  useEffect(() => {
    getCategoriesFromDb();
  }, []);

  useEffect(() => {
    getCategoriesFromDb();
  }, [pathname]);

  const elementRef = useRef(null);
  const slideRight = (element, scrollRight) => {
    element.scrollLeft += 500;
    setScrollRight(scrollRight);
  };
  const slideLeft = (element, scrollLeft) => {
    element.scrollLeft -= 500;
    setScrollLeft(scrollLeft);
  };

  console.log(currentCategory);
  return (
    <div className="flex items-center  w-full">
      <button
        onClick={() =>
          slideLeft(elementRef.current, elementRef.current.scrollLeft)
        }
        className="flex sm:p-[0.90rem]  cursor-pointer mx-2   sm:hover:bg-gray-300  rounded-full mb-1 sm:bg-gray-100 relative justify-center items-center"
      >
        <AiOutlineArrowLeft className="absolute max-sm:hidden" />
      </button>
      <div
        ref={elementRef}
        className="flex  w-full pb-2 pt-1  lg:px-8 gap-2  overflow-scroll overflow-x-auto  scrollbar-hide scroll-smooth"
      >
        <Link className="flex" href={`/${onPage}`}>
          <Chip text={"All"} active={currentCategory === undefined} />
        </Link>
        {categories.map((item, index) => {
          return (
            <Link
              key={index}
              className="flex"
              href={`/${item.type}/${item.category}`}
            >
              <Chip
                text={item.category}
                active={currentCategory?.trim() === item.category.trim()}
              />
            </Link>
          );
        })}
      </div>
      <button
        onClick={() =>
          slideRight(elementRef.current, elementRef.current.scrollRight)
        }
        className="flex p-[0.30rem]  sm:p-[0.90rem]  cursor-pointer mx-3   sm:hover:bg-gray-300  rounded-full mb-1 sm:bg-gray-100 relative justify-center items-center"
      >
        <AiOutlineArrowRight className="absolute max-sm:hidden" />
      </button>
    </div>
  );
};

export default Wrapper;
