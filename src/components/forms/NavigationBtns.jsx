import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const NavigationBtns = ({ prevStepFunc, nextStepFunc }) => {
  return (
    <div className={`flex w-[80%]  mx-auto  mb-4 items-center fixed bottom-0  justify-between  `}>
      <div className="flex justify-end ">
        <button onClick={prevStepFunc} className='w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-zinc-900  rounded-full cursor-pointer' >
          <IoIosArrowBack className='text-xl' />
        </button>
      </div>
      <div className="flex justify-end ">
        <button onClick={nextStepFunc} className='w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-zinc-900  rounded-full cursor-pointer' >
          <IoIosArrowForward className='text-xl' />
        </button>
      </div>
    </div>
  )
}

export default NavigationBtns
