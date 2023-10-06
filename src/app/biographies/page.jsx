import Card from '@/components/biographies/Card'
import React from 'react'

const Page = () => {
  return (
    <>
    <h1 className='text-2xl text-center m-auto text-gray-800 mb-2'>Biographies & Autograpies</h1>
    <div className='flex  justify-center items-center flex-wrap gap-14'>
      <Card/>
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
