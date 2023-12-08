import BioCard from '@/components/biographies/Card'
import BlogCard from '@/components/blogs/Card'

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
        <BioCard thumbnail={"https://shorturl.at/jCIV7"} name={"Roman reigns"} category={"Wrestler"} />
        <BioCard thumbnail={"https://shorturl.at/mAEY3"} name={"Issac Newton"} category={"Scientist"} />

      </section>

      <div className='mt-4' >
        <h1 className='text-[20px]  text-center sm:text-left px-4 text-gray-800 '>Latest blogs</h1>
      </div>

      <section className="flex flex-row flex-wrap mx-auto ">
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
