"use client";
import React, { useRef } from 'react';
import Chip from './Chip';
const Wrapper = () => {
  const elementRef = useRef(null);
  const slideRight = (element) => {
    element.scrollLeft += 500;
  }
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  }
  return (
    <div className='flex'>
      <div className='flex pb-2 pt-1 mx-2 gap-3 cursor-pointer overflow-scroll overflow-x-auto  scrollbar-hide scroll-smooth'>
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
      
    </div>
  )
}

export default Wrapper
