import Image from 'next/image'
import React from 'react'
import techImg from "public/tech.jpg"
import pic from "public/vercel.svg"
const Page = () => {
  return (
  <>
<div className='w-screen flex flex-col justify-center'>
  {/* nav */}
  <div>
  <main className="bg-gray-100 bg-opacity-25">
    <div className=" lg:mx-auto mb-8">
      <header className="flex flex-wrap items-center p-4 md:py-8">
        <div className="md:w-3/12 md:ml-16">
          {/* profile image */}
          <img
            className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
               border-2 border-blue-500 p-1"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            alt="profile"
          />
        </div>
        {/* profile meta */}
        <div className="w-8/12 md:w-7/12 ml-4">
          <div className="md:flex md:flex-wrap md:items-center mb-4">
            <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
              __shahwaix_23k
            </h2>
            {/* badge */}
            <span
              className="inline-block fas fa-certificate fa-lg text-blue-500 
                         relative mr-6 text-xl transform -translate-y-2"
              aria-hidden="true"
            >
              <i
                className="fas fa-check text-white text-xs absolute inset-x-0
                         ml-1 mt-px"
              />
            </span>
            {/* follow button */}
            <a
              href="#"
              className="bg-blue-500 px-2 py-1 
                  text-white font-semibold text-sm rounded  text-center 
                  sm:inline-block block"
            >
              Follow
            </a>
          </div>
          {/* post, following, followers list for medium screens */}
          <ul className="hidden md:flex space-x-8 mb-4">
           
            <li className='flex gap-2'>
              <span className="font-semibold">40.5k</span>
              Fans
            </li>
            <li className='flex gap-2'>
              <span className="font-semibold">302</span>
              Views
            </li>
          </ul>
          {/* user meta form medium screens */}
          <div className="hidden md:block">
            <h1 className="font-semibold">Programmer</h1>
            <span>"World is like a pendrive which stores memories of millions of people."</span>
            <p></p>
          </div>
        </div>
        {/* user meta form small screens */}
        <div className="md:hidden text-sm my-2">
          <h1 className="font-semibold">Mr Travlerrr...</h1>
          <span>Travel, Nature and Music</span>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </header>
      {/* posts */}
      <div className="px-px md:px-3">
        {/* user following for mobile only */}
        <ul
          className="flex md:hidden justify-around space-x-8 border-t 
          text-center p-2 text-gray-600 leading-snug text-sm"
        >
          <li>
            <span className="font-semibold text-gray-800 block">136</span>
            posts
          </li>
          <li>
            <span className="font-semibold text-gray-800 block">40.5k</span>
            followers
          </li>
          <li>
            <span className="font-semibold text-gray-800 block">302</span>
            following
          </li>
        </ul>
        
      </div>
    </div>
  </main>
  </div>
  {/* tabs */}
  <div class="space-y-5">
  <div class="border-b border-b-gray-200">
    <ul class="-mb-px flex items-center gap-4 text-sm font-medium">
      <li class="flex-1">
        <a
          href="#"
          class="relative flex items-center justify-center gap-2 px-1 py-3 text-blue-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-500 hover:text-blue-400"
        >
          Biography</a
        >
      </li>
      <li class="flex-1">
        <a href="#" class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-blue-500">
          Gallery</a
        >
      </li>
      <li class="flex-1">
        <a href="#" class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-blue-500">
          Videos
          <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500"> 8 </span></a
        >
      </li>
      <li class="flex-1">
        <a href="#" class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-blue-500">
          Conclusion</a
        >
      </li>
      <li class="flex-1">
        <a href="#" class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-blue-500"
          >Fans</a
        >
      </li>
    </ul>
  </div>
  </div>
</div>
  </>
  )
}

export default Page
