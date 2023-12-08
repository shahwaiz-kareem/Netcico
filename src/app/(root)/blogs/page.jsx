import Card from '@/components/blogs/Card'
import React from 'react'
import techJpg from "public/tech.png"
import img1 from "public/image.png"
import img2 from "public/image2.png"

const page = () => {
  return (
    <>
      <div>
        <h1 className='text-[30px] text-center sm:text-left px-4 text-gray-800 '>Blogs</h1>
      </div>
      <section className="flex flex-row flex-wrap ">
        <Card title={"Which technologies are going to kill nodejs in 2025?"} category={"Programming"} thumbnail={techJpg} />
        <Card title={"Which technologies are going to kill nodejs in 2025?"} category={"Programming"} thumbnail={img1} />
        <Card title={"Which technologies are going to kill nodejs in 2025?"} category={"Programming"} thumbnail={img2} />
      </section>
    </>
  )
}

export default page
