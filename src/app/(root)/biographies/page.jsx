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
        <h1 className='text-[30px]  text-center sm:text-left px-4 text-gray-800 '>Biographies</h1>
      </div>
      <section className="flex flex-row flex-wrap    w-full">
        <Card thumbnail={"https://shorturl.at/ahvFK"} name={"Haris Ali Khan"} category={"Programmer"} />
        <Card thumbnail={"https://shorturl.at/jCIV7"} name={"Roman reigns"} category={"Wrestler"} />
        <Card thumbnail={"https://shorturl.at/mAEY3"} name={"Issac Newton"} category={"Scientist"} />
        <Card thumbnail={"https://shorturl.at/ahvFK"} name={"Haris Ali Khan"} category={"Programmer"} />
        <Card thumbnail={"https://shorturl.at/jCIV7"} name={"Roman reigns"} category={"Wrestler"} />
        <Card thumbnail={"https://shorturl.at/mAEY3"} name={"Issac Newton"} category={"Scientist"} />
      </section>
    </>
  )
}

export default Page
