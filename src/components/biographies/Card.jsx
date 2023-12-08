import Image from 'next/image';
import './globals.css'
import { AiTwotoneHeart } from "react-icons/ai"
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import Link from 'next/link';
const Card = ({ name, thumbnail, category }) => {
  return (
    <article className='card overflow-hidden   h-[420px] rounded-lg transition-all duration-150 flex w-full px-4 my-4  md:w-1/2 lg:w-1/3  2xl:w-1/4 '>
      <div className='relative'>
        <Link href={"biographies/cwh"}>
          <Image className='avatar  object-cover object-position-[center]  rounded-lg max-w-full  max-h-full' height={1000} width={1000} alt='alternative text' src={thumbnail} />
        </Link>
        <div className='card_content rounded-lg overflow-hidden  max-lg:h-36 flex h-14 flex-col px-2 py-2 text-white absolute bottom-0  w-full gap-3'>
          <span className='text-3xl md:text-2xl mt-2'>{name} </span>
          <div className='w-2'>
            <span className='p-1 bg-[#1970d5] inline rounded'>{category}</span>
          </div>
          <div className='flex gap-4'>
            <div className='text-white cursor-pointer flex items-center justify-center gap-1'>
              <AiTwotoneHeart className='text-3xl hover:text-red-500' />
              <span className='text-sm'>23K</span>
            </div>
            <div className='text-white  flex items-center justify-center gap-1'>
              <AiOutlineEye className='text-3xl ' />
              <span className='text-sm'>23K</span>
            </div>
            <div className='text-white cursor-pointer flex items-center justify-center gap-1'>
              <AiOutlineShareAlt className='text-3xl hover:text-blue-500' />
              <span className='text-sm'>23K</span>
            </div>
          </div>
          <div className='div_move absolute rounded-lg bottom-0 bg-[#1970d5] w-32 h-1 '></div>
        </div>
      </div>
    </article>
  )
}

export default Card
