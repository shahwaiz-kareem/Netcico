import React from 'react'
import {IoSend} from 'react-icons/io5'
const InputBox = () => {
  return (
    <div className='sm:w-[60vw]  box-border shadow-sm flex flex-col justify-center pb-8  rounded-lg gap-2 pt-4 px-8 border'>
      <h2 className='text-black text-lg font-light '>Ask from people</h2>
      <div className='flex  justify-center items-center gap-4 w-full '>
     <input type="text" placeholder='Your question...' className='border p-4 font-light rounded-lg w-full outline-none' />
     <IoSend className='text-2xl font-bold text-blue-500 cursor-pointer hover:text-blue-600'/>
      </div>
    </div>
  )
}

export default InputBox
