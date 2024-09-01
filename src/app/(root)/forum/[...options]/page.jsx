import { getAnswers, getQuestionsByCategory } from "@/actions/forum.action";
import ForumAnswerForm from "@/components/forms/ForumAnswerForm";
import AnswerCard from "@/components/root/forum/AnswerCard";
import LoadAnswers from "@/components/root/forum/LoadAnswers";
import QuestionCard from "@/components/root/forum/QuestionCard";
import Link from "next/link";
import { BsHeartbreakFill } from "react-icons/bs";

const page = async ({ params }) => {
  let data;
  if (params.options.length >= 2)
    data = await getAnswers(params.options[1], 1, 6);
  const questions = await getQuestionsByCategory(params.options[0]);
  return (
    <>
      {params.options.length <= 1 ? (
        <>
          <div className=" mt-2">
            <span className=" flex flex-wrap items-center gap-2 text-xl  md:text-2xl   sm:text-left pl-4 text-gray-800 ">
              Question on {params.options[0]}
              <p className="text-sm"> ({questions.length} results found)</p>
            </span>
          </div>

          {questions.length === 0 ? (
            <div className=" flex items-center mt-12 justify-center gap-2  flex-col w-full h-full">
              <BsHeartbreakFill className="text-3xl " />
              <h3 className="text-xl  text-center ">
                Sorry, no post yet in this category!
              </h3>
            </div>
          ) : (
            <div className="flex  gap-4 px-2 lg:flex-wrap flex-col lg:flex-row">
              {questions.map((document) => (
                <Link
                  key={document._id}
                  href={`/forum/${params.options[0]}/${document._id}`}
                  className="md:w-1/2 mt-2"
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
            </div>
          )}
        </>
      ) : (
        <div className="flex p-2  flex-col  max-lg:px-2 h-full  gap-4 ">
          <div className="flex  flex-col gap-2">
            <div className="flex  gap-2 items-center">
              <h3 className="text-xl font-semibold">Answers</h3>
              <span className="text-sm ">({data.ansCount} answers found)</span>
            </div>
            {!data.answers ? (
              <div className=" text-sm my-4 font-semibold ">
                💔 No! answers posted yet! Be first to help others
              </div>
            ) : (
              <div className="flex gap-4  sm:px-0 mt-2 lg:w-1/2 flex-col">
                {data.answers.map((document) => (
                  <AnswerCard
                    key={document._id}
                    _id={document._id}
                    name={document.name}
                    answer={document.text}
                    date={document.createdAt}
                    votesCount={document.votesCount}
                  />
                ))}
                <LoadAnswers _id={params.options[1]} />
              </div>
            )}
          </div>
          <div className="flex items-center "></div>
          <ForumAnswerForm parentId={params._id} />
        </div>
      )}
    </>
  );
};

export default page;
