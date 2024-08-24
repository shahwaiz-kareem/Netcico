"use client";
import { GoHome } from "react-icons/go";
import { SiReaddotcv } from "react-icons/si";
import { GoPeople } from "react-icons/go";
import { TfiCommentAlt } from "react-icons/tfi";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavigationBtns = () => {
  const pathname = usePathname();
  const onPage = pathname.split("/")[1];
  return (
    <>
      <div
        className={`h-10 w-10 flex items-center font-thin text-black text-[28px] justify-center rounded-lg cursor-pointer hover:text-white hover:bg-[#1970d5] ${
          onPage === "" ? "bg-[#1970d5] text-white" : "bg-white text-black"
        } hover:duration-200 hover:ease-linear focus:bg-white`}
      >
        <Link href={"/"}>
          <GoHome />
        </Link>
      </div>

      <div
        className={`h-10 w-10 flex items-center font-thin text-black text-[28px]  justify-center rounded-lg cursor-pointer hover:text-white hover:bg-[#1970d5] ${
          onPage === "blogs" ? "bg-[#1970d5] text-white" : "bg-none text-black"
        }  hover:duration-200 hover:ease-linear focus:bg-white`}
      >
        <Link href={"/blogs"}>
          <SiReaddotcv />
        </Link>
      </div>

      <div
        className={`h-10 w-10 flex items-center font-thin text-black text-[28px]  justify-center rounded-lg cursor-pointer hover:text-white  hover:bg-[#1970d5] ${
          onPage === "biographies"
            ? "bg-[#1970d5] text-white"
            : "bg-none text-black"
        }   hover:duration-200 hover:ease-linear focus:bg-white`}
      >
        <Link href={"/biographies"}>
          <GoPeople />
        </Link>
      </div>
      <div
        className={`h-10 w-10 flex items-center font-thin text-black text-[28px]  justify-center rounded-lg cursor-pointer hover:text-white   hover:bg-[#1970d5] ${
          onPage === "forum" ? "bg-[#1970d5] text-white" : "bg-none text-black"
        }  hover:duration-200 hover:ease-linear focus:bg-white`}
      >
        <Link href={"/forum"}>
          <TfiCommentAlt />
        </Link>
      </div>
    </>
  );
};

export default NavigationBtns;
