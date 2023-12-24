import Image from 'next/image';
import './globals.css'
import { Alegreya } from 'next/font/google';
import { BsHandThumbsUp } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

import Link from 'next/link';

const alegreya = Alegreya({ subsets: ["cyrillic"], weight: '500' })
const Card = ({ title, thumbnail, category }) => {
  return (
    <>
      <div className=" px-4 my-3  w-full lg:w-[32.3333%]    py-4 bg-white shadow-md rounded-lg">
        <div className="py-2 px-2 flex flex-row w-full items-center justify-between">
          <div className="flex flex-row items-center">
            <a
              href="#"
              className="flex  flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
            >
              <Image
                className="rounded-full  h-8 w-8 object-cover"
                src={thumbnail}
                alt="Image"
              />
              <p className="ml-2 text-base font-medium">Jon Doe</p>
            </a>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-xs font-semibold text-gray-500">2 hours ago</p>
          </div>
        </div>
        <div className="mt-2  ">
          <Image
            className="  lg:h-[300px] align-middle   max-w-full max-h-full rounded-tl-[2rem] rounded-br-[2rem]"
            src={thumbnail}

            alt="Image"
          />

        </div>

        <div className='flex my-2 pt-2 items-center  gap-4'>
          <div className=' cursor-pointer flex items-center   gap-1'>
            <BsHandThumbsUp className='text-2xl  flex items-center  gap-1 font-light hover:fill-blue-500' />
            <span className='text-sm'>23k</span>
          </div>
          <div className='  flex items-center  gap-1'>
            <AiOutlineEye className='text-2xl font-light' />
            <span className='text-sm'>23k</span>
          </div>
          <div className=' cursor-pointer flex items-center   gap-1'>
            <AiOutlineShareAlt className='text-2xl font-light hover:text-blue-500' />
            <span className='text-sm'>23k</span>
          </div>
        </div>
        <div className="py-2 flex flex-wrap gap-1">
          <h2 className={alegreya.className + '  md:text-xl '}>
            {title}
          </h2>
          <p className='' >
            Technology is the identity  of generations so lets explore the technology of persian empire...
          </p>
        </div>

      </div>


    </>
  )
}

export default Card
