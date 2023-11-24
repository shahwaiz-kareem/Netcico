import Card from '@/components/biographies/Card';
import React from 'react';

export const metadata = {
  title: "Biographies || Netcico",
  description: "Age, gender, height, early life and  intresting biographies of popular people around the world."
};

const Page = () => {
  return (
    <>
      <div className=''>
        <h1 className='text-[30px]  text-center sm:text-left px-6 text-gray-800 '>Biographies</h1>
      </div>
      <section className="flex flex-row flex-wrap mx-auto ">
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

export default Page
