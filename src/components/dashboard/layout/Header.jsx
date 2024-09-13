"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";
import { ThemeContext } from "@/context/ThemeContext";
import { RxHamburgerMenu } from "react-icons/rx";

import { useRouter } from "next/navigation";
const Header = () => {
  const { toggleSidebar } = useContext(ThemeContext);
  const router = useRouter();
  const logout = () => {
    document.cookie = `${"dashboard-token"}=; max-age=0; path=/;`;
    router.push("/admin/signin");
  };
  return (
    <div className="flex px-2  bg-zinc-950 h-16 gap-2 items-center">
      <div className="flex  justify-between w-full    items-center">
        <div className="flex items-center justify-center gap-2">
          <RxHamburgerMenu
            onClick={toggleSidebar}
            className="text-xl cursor-pointer text-white hover:text-white"
          />
          <Link href={"/"}>
            <div className="flex pl-4 items-center justify-center">
              <Image className="h-4 sm:h-6 w-full" alt="logo" src={logo} />
            </div>
          </Link>
        </div>
        <button
          className="bg-white text-black rounded-lg px-4 py-1"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Header;
