import { RiDraftLine } from "react-icons/ri";
import { MdPublish } from 'react-icons/md';
import SuccessTag from './SuccessTag';

const Preview = ({ successDisplay, message, success, altText, NameOrTitle, saveAsDraftFunc, PublishFunc, author, slug, category, thumbnailUrl }) => {



  return (
    <div className='h-full flex justify-between flex-col gap-2  w-[80%]'>
      <SuccessTag successDisplay={successDisplay} success={success} message={message} />
      <div className="flex mt-1 flex-wrap justify-center h-full items-center  w-full ">
        <div className="xp-4 w-1/2  p-6 bg-zinc-900 rounded-xl">
          <div className=" rounded-xl">
            <img className="h-44 rounded-lg w-full object-cover object-center mb-2" src={thumbnailUrl} alt={altText} />
            <ul className='flex flex-col  gap-2'>
              <li className="leading-relaxed capitalize font-bold text-sm">Name/Title: {NameOrTitle}</li>
              <li className="leading-relaxed capitalize text-sm">Author: {author}</li>
              <li className="leading-relaxed capitalize text-sm">Category: {category}</li>
              <li className="leading-relaxedcapitalize text-sm">Slug: {slug}</li>
            </ul>
          </div>
          <div className='flex justify-center mt-2 items-center  gap-2'>
            <button disabled={success ? true : false} onClick={saveAsDraftFunc} className={`flex gap-1 items-center w-full px-4 py-2 ${!success ? "bg-orange-500 hover:bg-orange-600" : "bg-zinc-800"}  text-white text-sm font-medium rounded-md`}>
              <RiDraftLine className='h-4 w-4' />
              Save As Draft
            </button>
            <button disabled={success ? true : false} onClick={PublishFunc} className={`flex gap-1 items-center w-full px-4 py-2 ${!success ? "bg-blue-500 hover:bg-blue-600" : "bg-zinc-800"}  text-white text-sm font-medium rounded-md`}>
              <MdPublish className='h-4 w-4' />
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
