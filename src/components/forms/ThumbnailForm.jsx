"use client"
import { uploadThumbnail } from '@/actions/upload.action';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useRef, useState } from 'react';
import { AiFillPicture } from 'react-icons/ai';

const ThumbnailForm = ({ type, height, width }) => {
  const uploadInp = useRef(null)
  const context = useContext(ThemeContext)
  const { setThumbnailUrl } = context;
  const [thumbailImg, setThumbnailImg] = useState("");
  const [uploadBtnCss, setUploadBtnCss] = useState(" bg-gray-800  text-white  cursor-default ");
  const [disabled, setdisabled] = useState(true);
  const [thumbailImgClass, setThumbnailImgClass] = useState("hidden");
  const [borderColor, setBorderColor] = useState("white");

  function handleChange(e) {
    setThumbnailImg("");
    setThumbnailImg(URL.createObjectURL(e.target.files[0]));
    setThumbnailImgClass("absolute");
    setUploadBtnCss(" bg-blue-400  text-white  hover:bg-blue-500")
    setdisabled(false)
  }

  const handleSubmit = async (data) => {
    const responce = await uploadThumbnail(data, type)
    const { success } = responce
    console.log(responce);
    if (success) {
      setBorderColor("border-green-500")
      setUploadBtnCss("bg-gray-600 text-white  cursor-default")
      setdisabled(true)
      setThumbnailUrl(responce.thumbnailUrl)
    }
    else {
      setBorderColor("border-red-500")
    }
  }

  return (

    <form action={handleSubmit} className={'flex   cursor-pointer  items-center rounded-lg flex-col justify-center  border-dashed border-2 ' + borderColor}>
      <div onClick={() => uploadInp.current.click()} className='flex relative w-[400px]  h-[200px]  flex-col items-center justify-center  gap-4 '>
        <AiFillPicture className=' h-10 w-10 mt-4' />
        <input ref={uploadInp} onChange={handleChange} type="file" name='file' className='hidden h-full' />
        <span className=' capitalize'>Upload your thumbail</span>
        <div className='pt-1 overflow-hidden'>
          <img className={' w-full h-full  left-0 top-0 object-cover ' + thumbailImgClass} src={thumbailImg} />
        </div>
      </div>
      <button disabled={disabled} type="submit" className={'w-[98%]  h-10 rounded-lg mb-1 ' + uploadBtnCss}>Upload</button>
    </form>

  )
}

export default ThumbnailForm
