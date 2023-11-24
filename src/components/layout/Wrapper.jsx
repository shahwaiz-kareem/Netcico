"use client";
import React, { useRef, useState } from 'react';
import Chip from './Chip';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Wrapper = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollRight, setScrollRight] = useState(0);
  const elementRef = useRef(null);
  const slideRight = (element, scrollRight) => {
    element.scrollLeft += 500;
    setScrollRight(scrollRight)
  }
  const slideLeft = (element, scrollLeft) => {
    element.scrollLeft -= 500;
    setScrollLeft(scrollLeft)
  }

  console.log(scrollLeft, scrollRight);
  return (
    <div className='flex items-center w-[94vw] h-full'>
      <button onClick={() => slideLeft(elementRef.current, elementRef.current.scrollLeft)} className='flex p-[0.90rem]   cursor-pointer  hover:bg-gray-300  rounded-full  bg-gray-100 relative justify-center items-center'>
        <AiOutlineArrowLeft className='absolute ' />
      </button>
      <div ref={elementRef} className='flex pb-2 pt-1 px-2 gap-3 cursor-pointer overflow-scroll overflow-x-auto  scrollbar-hide scroll-smooth'>
        <Chip text={"Technology"} />
        <Chip text={"Health"} />
        <Chip text={"Lifestyle"} />
        <Chip text={"Politics"} />
        <Chip text={"Programming"} />
        <Chip text={"History"} />
        <Chip text={"Scientists"} />
        <Chip text={"Sports"} />
        <Chip text={"Entertainment"} />
        <Chip text={"Books"} />
        <Chip text={"Space"} />
        <Chip text={"Science"} />
        <Chip text={"Computer"} />
        <Chip text={"Mathematics"} />
        <Chip text={"Mathematics"} />
        <Chip text={"Mathematics"} />
        <Chip text={"Mathematics"} />
      </div>
      <button onClick={() => slideRight(elementRef.current, elementRef.current.scrollRight)} className='flex p-[0.90rem]  cursor-pointer  hover:bg-gray-300  rounded-full  bg-gray-100 relative justify-center items-center'>
        <AiOutlineArrowRight className='absolute' />
      </button>
    </div>
  )
}

export default Wrapper
