import React from 'react'
import NavigatorCard from './NavigatorCard'

const Navigator = ({ operation }) => {
  return (
    <section className='flex  items-center flex-col gap-8 h-full  justify-center '>
      <div className='flex  items-center  w-full justify-center mt-4 gap-4 px-4'>
        <NavigatorCard link={"/"} text={"Biographies"} />
        <NavigatorCard link={"/"} text={"Blogs"} />
      </div>

    </section >
  )
}

export default Navigator
