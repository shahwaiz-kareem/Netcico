import Card from '@/components/biographies/Card'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
    <h1 className='text-2xl text-center px-12 my-2 pb-4 text-gray-800 '>Biographies</h1>
    <div className='flex  justify-center items-center flex-wrap gap-14'>
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
    </div>
    </>
  )
}

export default Page
