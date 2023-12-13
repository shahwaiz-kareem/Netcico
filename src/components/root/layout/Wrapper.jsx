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

  return (
    <div className='flex items-center '>
      <button onClick={() => slideLeft(elementRef.current, elementRef.current.scrollLeft)} className='flex p-[0.90rem] mb-1 mx-4 cursor-pointer  hover:bg-gray-300  rounded-full  bg-gray-100 relative justify-center items-center'>
        <AiOutlineArrowLeft className='absolute ' />
      </button>
      <div ref={elementRef} className='flex pb-2 pt-1 px-2 gap-3 cursor-pointer overflow-scroll overflow-x-auto  scrollbar-hide scroll-smooth'>
        <Chip text={"All"} active={true} />
        <Chip text={"Health"} active={false} />
        <Chip text={"Lifestyle"} active={false} />
        <Chip text={"Politics"} active={false} />
        <Chip text={"Programming"} active={false} />
        <Chip text={"History"} active={false} />
        <Chip text={"Scientists"} active={false} />
        <Chip text={"Sports"} active={false} />
        <Chip text={"Entertainment"} active={false} />
        <Chip text={"Books"} active={false} />
        <Chip text={"Space"} active={false} />
        <Chip text={"Science"} active={false} />
        <Chip text={"Computer"} active={false} />
        <Chip text={"Mathematics"} active={false} />
        <Chip text={"Mathematics"} active={false} />
        <Chip text={"Mathematics"} active={false} />
        <Chip text={"Mathematics"} active={false} />
      </div>
      <button onClick={() => slideRight(elementRef.current, elementRef.current.scrollRight)} className='flex p-[0.90rem]  cursor-pointer mx-3   hover:bg-gray-300  rounded-full mb-1 bg-gray-100 relative justify-center items-center'>
        <AiOutlineArrowRight className='absolute' />
      </button>
    </div>
  )
}

export default Wrapper
