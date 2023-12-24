
import { SiReaddotcv } from "react-icons/si";
import { GoPeople } from "react-icons/go"
import NavigatorCard from '@/components/dashboard/create/NavigatorCard';

const page = () => {
  return (
    <div className='flex items-center w-1/2 h-[90%] mx-auto gap-12 justify-center'>
      <NavigatorCard text={"Biography"} Icon={SiReaddotcv} link={"/dashboard/create/biography"} />
      <NavigatorCard text={"Blog"} Icon={GoPeople} link={"/dashboard/create/blog"} />
    </div>
  )
}

export default page
