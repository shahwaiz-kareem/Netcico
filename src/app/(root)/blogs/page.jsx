import Card from '@/components/blogs/Card'
import React from 'react'


const page = () => {
  return (
    <>
      <div>
        <h1 className='text-[30px] text-center sm:text-left px-6 text-gray-800 '>Blogs</h1>
      </div>
      <section className="flex flex-row flex-wrap mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default page