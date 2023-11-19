import Card from '@/components/biographies/Card';
import React from 'react';

const Page = () => {
  return (
    <section className=' h-screen  overflow-x-hidden'>
      <h1 className='text-[30px]  max-sm:text-center  items-end text-gray-800 '>Biographies</h1>
      <main className='flex flex-row flex-wrap '>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </section>
  )
}

export default Page
