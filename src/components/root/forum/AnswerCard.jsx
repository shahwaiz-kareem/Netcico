import AnswerText from "./AnswerText";
import styles from "@/module.css/styles.module.css";
import UpvoteReaction from "./UpvoteReaction";

const AnswerCard = ({ _id, name, date, answer, color, votesCount }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const halfAnswerCount = Math.ceil((10 / 100) * answer.split(" ").length);
  const answerLength = answer.split(" ").length;
  return (
    <div className="flex flex-col bg-white   pt-4">
      <div className="flex items-center mb-1 justify-between">
        <div className="flex items-center gap-2 justify-center ">
          <span
            className={`rounded-full flex text-sm sm:text-md items-center justify-center h-6 w-6 md:h-8 md:w-8 text-white ${color}`}
          >
            {name.toUpperCase().slice(0, 1)}
          </span>
          <span className="hidden md:block text-xs sm:text-lg  italic">
            {name}
          </span>
          <span className="md:hidden text-xs font-medium">
            {name.split(" ")[0]}
          </span>
        </div>
        <div className="grid columns-1">
          <span className=" text-xs sm:text-sm italic font-medium">{`${new Date(
            date
          ).getDate()}-${months[new Date(date).getMonth()]}-${new Date(
            date
          ).getFullYear()}`}</span>
        </div>
      </div>
      <hr />

      <div className={`my-4 max-md:${styles.breakWord}  w-full `}>
        <span className="">
          {answerLength > 80
            ? answer.split(" ").slice(0, halfAnswerCount).join(" ")
            : answer}{" "}
        </span>
        {answerLength > 80 && (
          <AnswerText
            classProperty={styles.breakWord}
            answer={answer.split(" ").slice(halfAnswerCount).join(" ")}
          />
        )}
      </div>
      <hr />
      <div className="flex mt-2  items-center">
        <UpvoteReaction _id={_id} votes={votesCount} />
      </div>
      <span className="hidden bg-orange-500"></span>
      <span className="hidden bg-green-800"></span>
      <span className="hidden bg-blue-800"></span>
      <span className="hidden bg-yellow-800"></span>
      <span className="hidden bg-purple-500"></span>
    </div>
  );
};

export default AnswerCard;
