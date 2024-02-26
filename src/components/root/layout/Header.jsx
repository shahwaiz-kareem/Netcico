import { BiBell } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "@/../public/logo.png";
import profile from "@/../public/profile.jpg";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  let name = "shahwaix kareem";
  return (
    <header className=" flex fixed z-30 bg-white flex-col   w-full ">
      <div className="  flex  justify-between items-center ">
        <Link href={"/"}>
          <div className="px-4 flex items-center justify-center gap-[2px]">
            <Image
              className="w-full h-6"
              alt="logo"
              src={logo}
              height={50}
              width={250}
            />
          </div>
        </Link>
        <div className="w-[50%]  max-sm:w-[50%]  max-md:w-[70%] m-auto">
          <div className="flex rounded-full border m-2 items-center ">
            <input
              className="outline-none    px-4 w-full h-full border-none text-gray-600"
              type="text"
              placeholder="search..."
              name="search"
              id=""
            />
            <button className="border rounded-r-full px-2  h-[42px] ">
              <AiOutlineSearch className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 px-2 clear-both text-white">
          <div className="flex   justify-center">
            <div className="flex gap-4 items-center justify-center  text-gray-600">
              <BiBell className="text-2xl cursor-pointer text-gray-500" />
              <div className="hidden md:block text-gray-600 ">
                Shahwaix kareem
              </div>
            </div>
          </div>
          <div className="h-8 w-8 rounded-full cursor-pointer border border-blue-500  bg-gray-500  ">
            <Image
              className=" h-full rounded-full w-full"
              alt="profile image"
              src={profile}
              height={50}
              width={250}
            />
          </div>
        </div>
      </div>

      <Wrapper />
    </header>
  );
};

export default Header;
