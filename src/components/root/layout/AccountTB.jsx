"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";

const AccountTB = ({ session }) => {
  const context = useContext(AppContext);
  const { showDropdown, setShowDropdown } = context;

  return (
    <button
      onClick={() => {
        setShowDropdown(!showDropdown && session);
      }}
      className=" hover:shadow-2xl rounded-full cursor-pointer"
    >
      {session && session.user ? (
        <>
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              width={100}
              height={100}
              alt="profile image"
              className="h-6 w-8 sm:w-8 sm:h-8 shrink-0 rounded-full"
            />
          ) : (
            <div className="h-6 w-6 sm:w-7 sm:h-7 flex items-center justify-center  bg-green-800 shrink-0 rounded-full">
              <span className="text-lg text-center text-white">
                {session?.user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </>
      ) : (
        <Link
          href={"/signin"}
          className="py-2 px-1 sm:px-4 text-white rounded-lg bg-[#1970d5] hover:bg-blue-400"
        >
          Sign in
        </Link>
      )}
    </button>
  );
};

export default AccountTB;
