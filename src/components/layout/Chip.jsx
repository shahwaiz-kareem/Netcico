import React from 'react'

const Chip = ({text}) => {
  return (
    <>
      <span className='rounded text-md  bg-gray-100 text-gray-800 p-1 shadow hover:bg-gray-200 '>{text}</span>
    </>
  )
}

export default Chip
