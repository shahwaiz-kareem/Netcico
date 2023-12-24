import Link from 'next/link'
import { BsPlusCircleDotted } from 'react-icons/bs'
const NavigatorCard = ({ Icon, text, link }) => {
  return (
    <div className='flex items-center bg-zinc-950 rounded-lg border flex-col gap-6  justify-center py-8 px-14'>
      <Link href={link}>
        <BsPlusCircleDotted className='text-[125px]' />
      </Link>
      <span className='text-xl flex gap-2 justify-center items-center'>
        <Icon className='text-2xl' />
        {text}
      </span>
    </div>
  )
}

export default NavigatorCard
