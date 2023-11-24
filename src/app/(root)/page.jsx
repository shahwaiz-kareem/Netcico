import BioCard from '@/components/biographies/Card'
import BlogCard from '@/components/blogs/Card'

export default function Home() {
  return (
    <>
      <div className=''>
        <h1 className='text-[30px]  text-center sm:text-left px-6 text-gray-800 '>Home</h1>
      </div>
      <section className="flex flex-row flex-wrap mx-auto ">
        <BioCard />
        <BioCard />
        <BioCard />
        <BioCard />
        <BioCard />
        <BioCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
    </>
  )
}
