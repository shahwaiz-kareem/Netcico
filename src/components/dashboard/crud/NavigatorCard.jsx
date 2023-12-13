import Link from "next/link"
import { BsPlusCircleDotted } from "react-icons/bs"

const NavigatorCard = ({ text, link }) => {
  return (
    <div className="w-full  flex flex-col p-2 items-center justify-center   border  rounded-lg shadow-lg gap-4 border-gray-500">
      <Link href={link}>
        <BsPlusCircleDotted className="h-28 w-28 text-[#141820] hover:text-black" />
      </Link>
      <span className="text-xl">{text}</span>
    </div>


  )
}

export default NavigatorCard
