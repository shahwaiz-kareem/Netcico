import Card from '@/components/biographies/Card'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
    <div className='block pb-4 ml-20'>
    <h1 className='text-[30px] text-gray-800 '>Biographies</h1>
    </div>
    <section className='flex  justify-center items-center flex-wrap gap-14'>
      <Link href={"biographies/cwh"}>
      <Card/>
      </Link>
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

export default Page
