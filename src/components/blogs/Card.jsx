import Image from 'next/image';
import './globals.css'
import { AiFillLike } from "react-icons/ai"
import { AiOutlineEye } from "react-icons/ai";
import techJpg from "public/tech.jpg"
import { AiOutlineShareAlt } from "react-icons/ai";
import Link from 'next/link';
const Card = () => {
  return (
    <article className='card overflow-hidden   rounded-lg transition-all duration-150 flex w-full px-4 my-4  md:w-1/2 lg:w-1/3   2xl:w-1/4 '>
      <div className='relative h-[60vh]  '>
        <Link href={"blogs/cwh"}>
          <Image className='avatar  rounded-lg  h-full object-cover' height={800} width={800} alt='alternative text' src={techJpg} />
        </Link>
        <div className='  card_content rounded-lg overflow-hidden  flex h-fit flex-col px-2 py-2 text-white absolute bottom-0  w-full gap-3'>
          <span className='text-xl md:text-xl mt-2'>Which technologies are going to kill nodejs in 2025?</span>

          <div className='w-2'>
            <span className='p-1 bg-blue-500 inline rounded'>Programmer</span>
          </div>
          <div className='flex my-1 gap-4'>
            <div className='text-white cursor-pointer flex items-center justify-center gap-1'>
              <AiFillLike className='text-3xl hover:text-blue-500' />
              <span className='text-sm'>23K</span>
            </div>
            <div className='text-white cursor-pointer flex items-center justify-center gap-1'>
              <AiOutlineShareAlt className='text-3xl hover:text-blue-500' />
              <span className='text-sm'>23K</span>
            </div>
            <div className='text-white  flex items-center justify-center gap-1'>
              <AiOutlineEye className='text-3xl ' />
              <span className='text-sm'>23K</span>
            </div>
          </div>
          <div className='div_move absolute rounded-lg bottom-0 bg-blue-500 w-32 h-1 '></div>
        </div>
      </div>
    </article>
  )
}

export default Card
