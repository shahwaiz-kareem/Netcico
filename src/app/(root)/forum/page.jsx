import { getParentQuestions } from "@/actions/forum.action";
import InputBox from "@/components/root/forum/InputBox";
import LoadMore from "@/components/root/forum/LoadMore";
import QuestionCard from "@/components/root/forum/QuestionCard";
import Link from "next/link";

const Page = async () => {
  const data = await getParentQuestions(1, 6);

  return (
    <section className="flex flex-col w-full  sm:items-center md:items-start gap-4 py-4">
      <div
        className="md:pl-8 w-full flex flex-col  
       gap-4"
      >
        <h1 className="text-left pl-2  text-[30px]">Forum</h1>
        <div className="w-full px-2">
          <InputBox />
        </div>
      </div>
      <main className="flex w-full p-2 md:p-8 my-4 h-full  flex-col gap-4">
        <div className="flex items-center justify-between w-full ">
          <h1 className="text-[20px]">Questions</h1>
        </div>
        <article className="mt-4 flex flex-col gap-8 justify-center ">
          {data.map((document) => (
            <Link
              className=" md:w-1/2 mt-2"
              key={document._id}
              href={`/forum/${document.category}/${document._id}`}
            >
              <QuestionCard
                name={document.name}
                date={document.createdAt}
                _id={document._id}
                question={document.text}
                ansCount={document.ansCount}
                category={document.category}
              />
            </Link>
          ))}
          <LoadMore isDataEmpty={data.length === 0} />
        </article>
      </main>
    </section>
  );
};

export default Page;
