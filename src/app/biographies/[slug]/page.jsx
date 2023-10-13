import Image from 'next/image'
import React from 'react'
import techImg from "public/tech.jpg"
import pic from "public/vercel.svg"
const Page = () => {
  return (
  <>
<div className='w-screen flex flex-col items-center'>
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
  <div>
  {/*Tabs navigation*/}
  <ul
    className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
    role="tablist"
    data-te-nav-ref=""
  >
    <li role="presentation">
      <a
        href="#tabs-home"
        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        data-te-target="#tabs-home"
        data-te-nav-active=""
        role="tab"
        aria-controls="tabs-home"
        aria-selected="true"
      >
        Home
      </a>
    </li>
    <li role="presentation">
      <a
        href="#tabs-profile"
        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        data-te-target="#tabs-profile"
        role="tab"
        aria-controls="tabs-profile"
        aria-selected="false"
      >
        Profile
      </a>
    </li>
    <li role="presentation">
      <a
        href="#tabs-messages"
        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        data-te-target="#tabs-messages"
        role="tab"
        aria-controls="tabs-messages"
        aria-selected="false"
      >
        Messages
      </a>
    </li>
    <li role="presentation">
      <a
        href="#tabs-contact"
        className="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
        data-te-toggle="pill"
        data-te-target="#tabs-contact"
        role="tab"
        aria-controls="tabs-contact"
        aria-selected="false"
      >
        Contact
      </a>
    </li>
  </ul>
  {/*Tabs content*/}
  <div className="mb-6">
    <div
      className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-home"
      role="tabpanel"
      aria-labelledby="tabs-home-tab"
      data-te-tab-active=""
    >
      Tab 1 content
    </div>
    <div
      className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-profile"
      role="tabpanel"
      aria-labelledby="tabs-profile-tab"
    >
      Tab 2 content
    </div>
    <div
      className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-messages"
      role="tabpanel"
      aria-labelledby="tabs-profile-tab"
    >
      Tab 3 content
    </div>
    <div
      className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-contact"
      role="tabpanel"
      aria-labelledby="tabs-contact-tab"
    >
      Tab 4 content
    </div>
  </div>
</div>

</div>
  </>
  )
}

export default Page
