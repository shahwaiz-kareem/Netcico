import BioCard from '@/components/root/biographies/Card'
import BlogCard from '@/components/root/blogs/Card'
import romanImg from "@/../public/roman.png"
import techJpg from "@/../public/tech.png"
import tech1 from "@/../public/1tech.jpg"
import img1 from "@/../public/image.png"
import img2 from "@/../public/image2.png"
import Wrapper from '@/components/root/blogs/Wrapper'
export default function Home() {
  return (
    <>


      <div className='mt-4' >
        <h1 className='text-[20px]  text-center sm:text-left px-4 text-gray-800 '>Popular Biographies</h1>
      </div>

      <section className="flex flex-row flex-wrap mx-auto ">
        <BioCard thumbnail={"https://shorturl.at/ahvFK"} name={"Haris Ali Khan"} category={"Programmer"} />
        <BioCard thumbnail={"https://shorturl.at/mAEY3"} name={"Issac Newton"} category={"Scientist"} />
        <BioCard thumbnail={"https://shorturl.at/jCIV7"} name={"Roman reigns"} category={"Wrestler"} />
        <BioCard thumbnail={"https://shorturl.at/ahvFK"} name={"Haris Ali Khan"} category={"Programmer"} />
        <BioCard thumbnail={romanImg} name={"Roman reigns"} category={"Wrestler"} />
        <BioCard thumbnail={"https://shorturl.at/mAEY3"} name={"Issac Newton"} category={"Scientist"} />

      </section>

      <div className='mt-4' >
        <h1 className='text-[20px]  text-center sm:text-left px-4 text-gray-800 '>Latest blogs</h1>
      </div>

      <Wrapper >
        <BlogCard title={"Which technologies are going to kill nodejs in 2025?"} category={"Programming"} thumbnail={techJpg} />
        <BlogCard title={"Which technologies are going to kill nodejs in 2025?"} category={"Programming"} thumbnail={img1} />
        <BlogCard title={"Which technologies are going to kill nodejs in 2025?"} category={"Programming"} thumbnail={img2} />
        <BlogCard title={"Which technologies are going to kill nodejs in 2025?"} category={"Programming"} thumbnail={tech1} />
      </Wrapper>
    </>
  )
}
