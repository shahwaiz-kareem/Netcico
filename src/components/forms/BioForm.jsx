"use client";

import { useContext, useRef, useState } from 'react'
import { AiFillPicture } from 'react-icons/ai';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiDraftLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import { bioSchema } from '../../lib/validation/BioSchema';
import { zodResolver } from "@hookform/resolvers/zod"
import { MdPublish } from 'react-icons/md';
import { ThemeContext } from '@/context/ThemeContext';
import Editor from '../editor/Editor';

const stepsArr = [
  {
    step: 0,
    name: "Basic Information",
  },
  {
    step: 1,
    name: "Post Content",
  },
  {
    step: 2,
    name: "Publish",
  },
]



const BioForm = () => {
  const context = useContext(ThemeContext)
  const { width } = context;
  const [steps, setSteps] = useState(stepsArr);
  const uploadInp = useRef(null)
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [thumbailImg, setThumbnailImg] = useState("");
  const [thumbailImgClass, setThumbnailImgClass] = useState("hidden");




  const { register, handleSubmit, setValue, getValues, formState, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      slug: "",
      author: "Shahwaiz Karim",
      category: "",
      metaTitle: "",
      description: "",
      keywords: "",
      thumbnail: "",
      AltText: ""
    },
    mode: 'all',
    resolver: zodResolver(bioSchema)
  });

  function handleChange(e) {
    setThumbnailImg("");
    setThumbnailImg(URL.createObjectURL(e.target.files[0]));
    setThumbnailImgClass("absolute");
  }


  const slugGenerator = (title) => {
    const slug = structuredClone(title).trim().toLowerCase().split(" ").join("-")
    setValue("slug", slug)
  }
  const prevStep = () => {
    if (currentStep.step == 0) return
    setCurrentStep(steps[currentStep.step - 1])

  }

  const nextStep = () => {
    if (currentStep.step === steps.length - 1) return;
    // if (formState.isValid) {
    // }
    setCurrentStep(steps[currentStep.step + 1])

  }

  // const showErrors = async () => {
  //   let errorsArr = [];
  //   Object.keys(errors).forEach((error, index) => {
  //     errorsArr.push(errors[error])
  //   })
  //   return errorsArr
  // }




  const saveAsDraft = (e) => {
  }

  return (
    <section className="w-full h-full py-4 flex flex-col   rounded-lg">
      <div className={'px-6 flex flex-col  h-full justify-center  relative mx-auto  gap-2 ' + width}>
        <h1 className='text-2xl font-bold'>Create Biography ({currentStep.name})</h1>
        {/* <div className={'relative border-2  border-red-500 bg-zinc-800 mx-auto my-3 rounded p-2 flex flex-col '}>
          {

            errorList.map((error, index) => {

              <span key={index} className='text-red-500 text-lg flex gap-2 items-center justify-center'>
                <BiError className='text-2xl' />
                {error.message}
              </span>
            })
          }
        </div> */}
        {
          currentStep.step === 0 &&
          <form className='w-full flex h-full items-center justify-between'>
            <div className='flex flex-col gap-8'>
              <input type="text" onInput={(e) => slugGenerator(e.target.value)} placeholder='Name' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("name")} />
              <input type="text" placeholder='Slug' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("slug")} />
              <input type="text" placeholder='Author' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("author")} />

              <select {...register("category")} aria-placeholder='Category' className=' pr-4 flex  py-3 rounded-lg bg-zinc-900 outline-none gap-2' >
                {/* TODO: Setting category from react-form-hook */}
                <option value="Scientist">Scientist</option>
                <option value="Driver">Driver</option>
                <option value="Teacher">Teacher</option>
              </select >

            </div>
            <div className='flex flex-col gap-8'>
              <input type="text" placeholder='Title(SEO)' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("metaTitle")} />
              <textarea placeholder='Description' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("description")} />
              <input type="text" placeholder='Keywords' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("keywords")} />
            </div>
            <div className='flex flex-col gap-8'>
              <div onClick={() => uploadInp.current.click()} className='flex w-[400px]  h-[210px]  relative cursor-pointer  items-center rounded-lg flex-col justify-center  border-dashed border-2'>
                <div className='flex  top-2 flex-col items-center justify-center h-full gap-4 '>
                  <AiFillPicture className=' h-10 w-10 mt-4' />
                  <input {...register("thumbnail")} ref={uploadInp} onChange={handleChange} type="file" className='hidden h-full' />
                  <span className='mt-2 capitalize'>Upload your thumbail</span>
                  <div className=' overflow-hidden'>
                    <img className={'h-full w-full  top-0 left-0 object-cover ' + thumbailImgClass} src={thumbailImg} />
                  </div>
                </div>
              </div>
              <input type="text" placeholder='Alternative Text' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("AltText")} />
            </div>

          </form>
        }
        {
          currentStep.step === 1 &&

          < Editor />

        }
        {
          currentStep.step === 2 &&
          <div className='h-full flex justify-between items-center w-[80%]'>
            <div className="flex flex-wrap justify-center items-center  w-full -m-4">
              <div className="xp-4 w-1/2 rounded-xl">
                <div className="bg-zinc-900 p-6  rounded-xl">
                  <img className="h-50 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />

                  <h1 className="leading-relaxed text-lg">Which technologies are going to kill nodejs in 2025.</h1>
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center  gap-4 flex-col w-[30%]'>
              <button onClick={saveAsDraft} className="inline-flex items-center w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md">
                <RiDraftLine className='h-4 w-4' />
                Save As Draft
              </button>
              <button className="inline-flex items-center w-full px-4 py-2 bg-blue-500 hovenullr:bg-blue-600 text-white text-sm font-medium rounded-md">
                <MdPublish className='h-4 w-4' />
                Publish
              </button>
            </div>


          </div>
        }
        <div className={`flex w-full  mx-auto  mt-6 items-center justify-between  bottom-0 absolute   `}>
          <div className="flex justify-end ">
            <button onClick={prevStep} className='w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full cursor-pointer' >
              <IoIosArrowBack className='text-xl' />
            </button>
          </div>
          <div className="flex justify-end ">
            <button onClick={nextStep} className='w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full cursor-pointer' >
              <IoIosArrowForward className='text-xl' />
            </button>
          </div>
        </div>
      </div>
    </section >

  )
}

export default BioForm
