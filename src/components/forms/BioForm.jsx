"use client";

import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { bioSchema } from '../../lib/validation/BlogSchema';
import { zodResolver } from "@hookform/resolvers/zod"
import { ThemeContext } from '@/context/ThemeContext';
import Editor from '../editor/Editor';
import ThumbnailForm from './ThumbnailForm';
import { updateBlog } from '@/actions/blog.action';
import { Create_JS_TOOLS } from "@/components/editor/tools";
import Preview from './Preview';
import NavigationBtns from './NavigationBtns';
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



const BioForm = ({ isUpdate, id, updateTitle, updateSlug, updateCategory, updateAuthor, updateMetaTitle, updateMetaDescription, updateTags, updateThumbnail, updateAltText, updateContent }) => {
  const context = useContext(ThemeContext)
  const { width, data, setData, thumbnailUrl, setThumbnailUrl, setSubmitSuccess, submitSuccess } = context;
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [successDisplay, setSuccessDisplay] = useState("hidden");
  const { success, message } = submitSuccess;

  useEffect(() => {
    if (isUpdate) {
      setData(JSON.parse(updateContent));
      setThumbnailUrl(updateThumbnail)
    }
  }, [])


  const { register, getValues, setValue, formState } = useForm({
    defaultValues: {
      name: updateTitle || "",
      slug: updateSlug || "",
      author: updateAuthor || "Shahwaiz Karim",
      category: updateCategory || "",
      metaTitle: updateMetaTitle || "",
      metaDescription: updateMetaDescription || "",
      tags: updateTags || "",
      thumbnail: updateThumbnail || "",
      altText: updateAltText || ""
    },
    mode: 'all',
    resolver: zodResolver(bioSchema)
  });

  const { name, slug, author, altText, category } = getValues()

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
    if (formState.isValid && !success) {
      if (isUpdate) setCurrentStep(steps[currentStep.step + 1])
      if (thumbnailUrl !== "") setCurrentStep(steps[currentStep.step + 1])
    }
  }


  const hideTag = () => {
    setTimeout(() => {
      setSuccessDisplay("hidden")
    }, 3000);
  }



  const PublishBlog = async () => {
    let values = getValues()
    values["content"] = JSON.stringify(data);
    values["isActive"] = true;
    values["thumbnail"] = thumbnailUrl
    let result = await updateBlog({ _id: id }, values)
    setSubmitSuccess({
      success: result.success,
      message: result.data !== null && result.data
    })
    setSuccessDisplay("flex")
    hideTag()
  }
  const saveAsDraft = async () => {
    let values = getValues()
    values["content"] = JSON.stringify(data);
    values["isActive"] = false;
    values["thumbnail"] = thumbnailUrl
    let result = await updateBlog({ _id: id }, values)
    setSubmitSuccess({
      success: result.success,
      message: result.data !== null && result.data
    })
    setSuccessDisplay("flex")
    hideTag()
  }

  console.log(isUpdate, "in up");
  return (
    <section className="w-full h-full py-4  rounded-lg">
      <div className={'px-6 flex flex-col  h-full  items-center   mx-auto  gap-2 ' + `${currentStep.step === 1 ? "w-full" : width}`}>
        <h1 className={'text-2xl w-full font-bold ' + `${currentStep.step === 1 ? "text-center mx-auto" : ""}`}>{isUpdate ? "Update Biography" : "Create a new Biography"} ({currentStep.name})</h1>

        {
          currentStep.step === 0 &&
          <section className='w-full flex h-full items-center justify-between'>
            <div className='flex flex-col gap-8'>
              <input type="text" onInput={(e) => slugGenerator(e.target.value)} placeholder='Name' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("name")} />
              <input type="text" placeholder='Slug' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("slug")} />
              <input type="text" placeholder='Author' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("author")} />

              <select {...register("category")} aria-placeholder='Category' className=' pr-4 flex  py-3 rounded-lg text-white bg-zinc-900 outline-none gap-2' >

                <option value="Scientist">Scientist</option>
                <option value="Driver">Driver</option>
                <option value="Teacher">Teacher</option>
              </select >

            </div>
            <div className='flex flex-col gap-8'>
              <input type="text" placeholder='Title(SEO)' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("metaTitle")} />
              <textarea placeholder='Description(SEC)' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("metaDescription")} />
              <input type="text" placeholder='tags' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("tags")} />
            </div>
            <div className='flex flex-col gap-8'>
              <ThumbnailForm id={id} updateAction={updateBlog} isUpdate={isUpdate} updateThumbnailUrl={updateThumbnail} type={"blog"} />
              <input type="text" placeholder='Alternative Text' className='px-2 py-3 rounded-lg bg-zinc-900 outline-none' {...register("altText")} />
            </div>
          </section>
        }
        {
          currentStep.step === 1 &&

          <Editor tools={Create_JS_TOOLS} />

        }
        {
          currentStep.step === 2 &&
          <Preview NameOrTitle={name} PublishFunc={PublishBlog} altText={altText} message={message} saveAsDraftFunc={saveAsDraft} success={success} author={author} slug={slug} category={category} thumbnailUrl={thumbnailUrl} successDisplay={successDisplay} />
        }
        <NavigationBtns prevStepFunc={prevStep} nextStepFunc={nextStep} />
      </div>
    </section >

  )
}

export default BioForm
