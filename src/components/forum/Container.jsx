import React from 'react'
import QuestionCard from './QuestionCard'

const Container = () => {
  return (
    <div className="w-full md:w-2/3  p-5 bg-white rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div className="w-2/3">
        <h2 className="section-heading text-bold">
          Questions and Answer
        </h2>
      </div>
  
      <div className=" w-1/3 flex justify-end items-center space-x-1">
        <div className="prev-item flex items-center justify-center w-7 h-7 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <svg className="w-auto h-3 fill-current text-primary-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
        </div>
        <div className="next-item flex items-center justify-center w-7 h-7 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <svg className="w-auto h-3 fill-current text-primary-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
        </div>
      </div>
    </div>
     <QuestionCard/>
  </div>
  )
}

export default Container
