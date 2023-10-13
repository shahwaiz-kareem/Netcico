import React from 'react'
import './globals.css'
import {AiTwotoneHeart} from "react-icons/ai"
import {AiOutlineEye} from "react-icons/ai";
import {AiOutlineShareAlt} from "react-icons/ai";
import Image from 'next/image'
const Card = () => {
  return (
<article className="card rounded-lg ">
  <Image
    className="card__background cursor-pointer"
    src="https://imgs.search.brave.com/4Wegtl5FkZN0svocYsDZMj3NYmr8AH42iW__smq5gqc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd2lraXB1/cmEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA1L2Nv/ZGV3aXRoaGFycnlf/MTE3MjU2MTgwXzE3/MDgyMzg2NzgzMzU0/OF81MDk1Nzc0MDUy/Njg5NDg1ODAwX24u/d2VicD9yZXNpemU9/MTAyNCwxMDI0JnNz/bD0x"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width={1920}
    height={2193}
  />
  <div className="card__content | flow w-full ">
    <div className="card__content--container | flow">
      <h2 className="card__title text-2xl ">Haris Ali Khan</h2>
      <div className='bg-blue-500 inline-block  px-2 rounded-lg'>
      <span className='text-white '>
        Web Dev
      </span>
      </div>
    </div>
    <div className='flex gap-4'>
       <div className='text-white cursor-pointer flex items-center justify-center gap-1'>
         <AiTwotoneHeart className='text-3xl hover:text-red-500'/>
         <span className='text-sm'>23K</span>
       </div>
       <div className='text-white  flex items-center justify-center gap-1'>
         <AiOutlineEye className='text-3xl '/>
         <span className='text-sm'>23K</span>
       </div>
       <div className='text-white cursor-pointer flex items-center justify-center gap-1'>
         <AiOutlineShareAlt className='text-3xl hover:text-blue-500'/>
         <span className='text-sm'>23K</span>
       </div>
  
    </div>
  </div>
</article>
  )
}

export default Card
