import InputBox from '@/components/root/forum/InputBox'
import Container from '@/components/root/forum/Container'
import React from 'react'
import { BiSolidFilterAlt } from 'react-icons/bi'
const Page = () => {
  return (
    <section className='flex flex-col w-full justify-center items-center gap-4 py-4'>
      <h1 className='text-[30px]'>Forum</h1>
      <InputBox />
      <main className='flex w-full p-8 m-4 h-full  flex-col gap-4'>
        <div className='flex items-center justify-between w-full '>
          <h1 className='text-[20px]'>Questions on Netcico</h1>
          <BiSolidFilterAlt className='text-xl' />
        </div>
        <article className='flex flex-col flex-wrap'>

          <Container />

        </article>
      </main>
    </section>
  )
}

export default Page
