import { getAnswers } from "@/actions/forum.action";
import ForumAnswerForm from "@/components/forms/ForumAnswerForm";
import AnswerCard from "@/components/root/forum/AnswerCard";
import LoadAnswers from "@/components/root/forum/LoadAnswers";

const page = async ({ params }) => {
  const data = await getAnswers(params._id, 1, 6);

  return (
    <div className="flex p-2  flex-col  max-lg:px-2 h-full  gap-6 ">
      <div className="flex  flex-col gap-2">
        <div className="flex  gap-2 items-center">
          <h3 className="text-xl font-semibold">Answers</h3>
          <span className="text-sm ">({data.ansCount} answers found)</span>
        </div>
        {data.answers.length === 0 ? (
          <div className=" text-sm font-semibold ">
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
            <LoadAnswers _id={params._id} />
          </div>
        )}
      </div>
      <div className="flex items-center "></div>
      <ForumAnswerForm parentId={params._id} />
    </div>
  );
};

export default page;
