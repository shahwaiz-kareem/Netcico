import { AiOutlineSearch } from "react-icons/ai";
import logo from "@/../public/logo.png";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import AccountTB from "./AccountTB";
import AccountM from "./AccountM";

const Header = async () => {
  const session = await getServerSession();
  return (
    <header className="flex fixed z-30 bg-white flex-col w-full">
      <div className="relative flex justify-between items-center">
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
        <div className="w-[50%] max-sm:w-[50%] max-md:w-[70%] m-auto">
          <div className="flex rounded-full border m-2 items-center">
            <input
              className="outline-none px-4 w-full h-full border-none text-gray-600"
              type="text"
              placeholder="search..."
              name="search"
              id=""
            />
            <button className="border rounded-r-full px-2 h-[42px]">
              <AiOutlineSearch className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 px-2">
          <AccountM session={session} />
          <div className="flex p-4 items-center justify-center text-gray-600"></div>
          <AccountTB session={session} />
        </div>
      </div>
      <Wrapper />
    </header>
  );
};

export default Header;
