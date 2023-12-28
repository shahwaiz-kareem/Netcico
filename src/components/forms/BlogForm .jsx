"use client";

import { useContext, useRef, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiDraftLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import { blogSchema } from '../../lib/validation/BlogSchema';
import { zodResolver } from "@hookform/resolvers/zod"
import { MdPublish } from 'react-icons/md';
import { ThemeContext } from '@/context/ThemeContext';
import Editor from '../editor/Editor';
import ThumbnailForm from './ThumbnailForm';
import { updateBlog } from '@/actions/blog.action';
const steps = [
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



const BlogForm = () => {
  const context = useContext(ThemeContext)
  const { width, data, thumbnailUrl, setSubmitSuccess, submitSuccess } = context;
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const successTag = useRef(null)
  const { success, message } = submitSuccess

  const { register, getValues, setValue, formState } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      author: "Shahwaiz Karim",
      category: "",
      metaTitle: "",
      metaDescription: "",
      tags: "",
      thumbnail: "",
      altText: ""
    },
    mode: 'all',
    resolver: zodResolver(blogSchema)
  });

  const { title, slug, author, altText, category } = getValues()

  const slugGenerator = (title) => {

    const slug = structuredClone(title).trim().toLowerCase().split(" ").join("-")
    setValue("slug", slug)
  }
  const prevStep = () => {
    if (currentStep.step == 0 || success) return
    setCurrentStep(steps[currentStep.step - 1])

  }

  const nextStep = () => {
    if (currentStep.step === steps.length - 1) return;
    if (formState.isValid && thumbnailUrl !== "" && !success) {
      setCurrentStep(steps[currentStep.step + 1])
    }
  }


  const hideTag = () => {
    setTimeout(() => {
      successTag.current.remove()
    }, 3000);
  }


  const PublishBlog = async () => {
    let values = getValues()
    values["content"] = JSON.stringify(data);
    values["active"] = true;
    values["thumbnail"] = thumbnailUrl
    let result = await updateBlog({}, values)
    setSubmitSuccess({
      success: result.success,
      message: result.data !== null && result.data
    })
    hideTag()
  }
  const saveAsDraft = async () => {
    let values = getValues()
    values["content"] = JSON.stringify(data);
    values["active"] = false;
    values["thumbnail"] = thumbnailUrl
    let result = await updateBlog({}, values)
    setSubmitSuccess({
      success: result.success,
      message: result.data !== null && result.data
    })
    hideTag()
  }


  return (
    <section className="w-full h-full py-4  rounded-lg">
      <div className={'px-6 flex flex-col  h-full  items-center   mx-auto  gap-2 ' + `${currentStep.step === 1 ? "w-full" : width}`}>
        <h1 className={'text-2xl w-full font-bold ' + `${currentStep.step === 1 ? "text-center mx-auto" : ""}`}>Create Biography ({currentStep.name})</h1>

        {
          currentStep.step === 0 &&
          <section className='w-full flex h-full items-center justify-between'>
            <div className='flex relative flex-col gap-8'>
              <input type="text" onInput={(e) => slugGenerator(e.target.value)} placeholder='Title' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("title")} />
              <input type="text" placeholder='Slug' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("slug")} />
              <input type="text" placeholder='Author' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("author")} />

              <select {...register("category")} aria-placeholder='Category' className=' pr-4 flex  py-3 rounded-lg bg-zinc-900 text-white outline-none gap-2' >

                <option value="Scientist">Scientist</option>
                <option value="Driver">Driver</option>
                <option value="Teacher">Teacher</option>
              </select >

            </div>
            <div className='flex flex-col gap-8'>
              <input type="text" placeholder='Title(SEO)' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("metaTitle")} />
              <textarea placeholder='description(SEO)' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("metaDescription")} />
              <input type="text" placeholder='tags' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("tags")} />
            </div>
            <div className='flex flex-col gap-8'>
              <ThumbnailForm type={"blog"} />
              <input type="text" placeholder='Alternative Text' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("altText")} />
            </div>
          </section>
        }
        {
          currentStep.step === 1 &&

          <Editor />

        }
        {
          currentStep.step === 2 &&
          <div className='h-full flex justify-between flex-col gap-2  w-[80%]'>
            <span ref={successTag} className={`w-full ${success == null ? "hidden" : "block"} py-1 capitalize text-white rounded-lg pl-2 ${success ? "bg-green-500 " : "bg-red-500 "}`}>{success ? "your form has been success successfully!" : `your form has not been success successfully! error: ${message}`}</span>
            <div className="flex mt-4 flex-wrap justify-center items-center  w-full -m-4">
              <div className="xp-4 w-1/2  p-6 bg-zinc-900 rounded-xl">
                <div className=" rounded-xl">
                  <img className="h-50 rounded-lg w-full object-cover object-center mb-2" src={thumbnailUrl} alt={altText} />
                  <ul className='flex flex-col  gap-2'>
                    <li className="leading-relaxed text-lg">Title: {title}</li>
                    <li className="leading-relaxed text-lg">Author: {author}</li>
                    <li className="leading-relaxed text-lg">Category {category}</li>
                    <li className="leading-relaxed text-lg">Slug: {slug}</li>
                  </ul>
                </div>
                <div className='flex justify-center mt-2 items-center  gap-2'>
                  <button disabled={success ? true : false} onClick={saveAsDraft} className={`flex gap-1 items-center w-full px-4 py-2 ${!success ? "bg-orange-500 hover:bg-orange-600" : "bg-zinc-800"}  text-white text-sm font-medium rounded-md`}>
                    <RiDraftLine className='h-4 w-4' />
                    Save As Draft
                  </button>
                  <button disabled={success ? true : false} onClick={PublishBlog} className={`flex gap-1 items-center w-full px-4 py-2 ${!success ? "bg-blue-500 hover:bg-blue-600" : "bg-zinc-800"}  text-white text-sm font-medium rounded-md`}>
                    <MdPublish className='h-4 w-4' />
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
        <div className={`flex w-[80%]  mx-auto  mb-4 items-center fixed bottom-0  justify-between  `}>
          <div className="flex justify-end ">
            <button onClick={prevStep} className='w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-zinc-900  rounded-full cursor-pointer' >
              <IoIosArrowBack className='text-xl' />
            </button>
          </div>
          <div className="flex justify-end ">
            <button onClick={nextStep} className='w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-zinc-900  rounded-full cursor-pointer' >
              <IoIosArrowForward className='text-xl' />
            </button>
          </div>
        </div>
      </div>
    </section >

  )
}

export default BlogForm
