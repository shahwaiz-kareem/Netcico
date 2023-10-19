import Card from '@/components/biographies/Card'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>

    <h1 className='text-[30px] pb-2 lg:pl-12 items-end text-gray-800 '>Biographies</h1>
    <section className='flex  justify-center items-center flex-wrap gap-14 '>
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
