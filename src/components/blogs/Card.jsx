import Image from 'next/image';
import './globals.css'
import { Alegreya } from 'next/font/google';
import { AiTwotoneLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FaShare } from "react-icons/fa";


const alegreya = Alegreya({ subsets: ["cyrillic"], weight: '500' })
import Link from 'next/link';
const Card = ({ title, thumbnail, category }) => {
  return (
    <>
      <div className="w-full px-3 my-4  md:w-1/2 lg:w-1/3  2xl:w-1/4 flex  items-center justify-between flex-col  py-4 bg-white shadow-md rounded-lg">
        <div className="py-2 flex flex-row w-full items-center justify-between">
          <div className="flex flex-row items-center">
            <a
              href="#"
              className="flex  flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
            >
              <Image
                className="rounded-full h-8 w-8 object-cover"
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
            className="object-cover max-w-full max-h-full rounded-lg"
            src={thumbnail}
            alt="Image"
          />
          <div className='flex my-2   gap-4'>
            <div className=' cursor-pointer flex items-center   gap-1'>
              <AiTwotoneLike className='text-2xl font-light hover:text-blue-500' />
              <span className='text-sm'>23k</span>
            </div>
            <div className='  flex items-center justify-center gap-1'>
              <FaEye className='text-2xl font-light' />
              <span className='text-sm'>23k</span>
            </div>
            <div className=' cursor-pointer flex items-center   gap-1'>
              <FaShare className='text-2xl font-light hover:text-blue-500' />
              <span className='text-sm'>23k</span>
            </div>
          </div>
        </div>
        <div className="py-2 flex flex-wrap">
          <h2 className={alegreya.className + '  md:text-xl '}>
            {title}
          </h2>
          <p className='' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt eligendi itaque at cum repudiandae eum alias dicta, dolores sit asperiores. Iure, corporis.
          </p>
        </div>
      </div>


    </>
  )
}

export default Card
