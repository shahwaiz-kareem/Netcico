import Card from '@/components/articles/Card'
import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='text-2xl text-center m-auto text-gray-800 '>Articles & Blogs</h1>
    <section className="flex flex-row flex-wrap mx-auto">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </section>
    </>
  )
}

export default page
