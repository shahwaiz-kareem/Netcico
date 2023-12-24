"use client";
import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "public/logo.png"
import { ThemeContext } from '@/context/ThemeContext';
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const { toggleSidebar } = useContext(ThemeContext)

  return (
    <>
      <header className="flex px-2  bg-zinc-950 h-16 gap-2 items-center">
        <div className="flex px-2 justify-between w-full   gap-3 items-center">
          <RxHamburgerMenu onClick={toggleSidebar} className='text-xl cursor-pointer text-white hover:text-white' />
          <Link href={"/"}>
            <div className='flex items-center justify-center gap-[2px]' >
              <Image className='w-full h-6' alt='logo' src={logo} height={10} width={200} />
            </div>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
