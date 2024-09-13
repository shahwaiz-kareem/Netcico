const QuestionCard = ({
  name,
  date,
  color,
  _id,
  question,
  ansCount,
  category,
}) => {
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

  return (
    <div className="flex w-full flex-col bg-white shadow-lg rounded-md px-2 sm:px-8 py-4">
      <div className="flex items-center mb-1 justify-between">
        <div className="flex items-center gap-2 justify-center ">
          <span
            className={`rounded-full flex text-sm sm:textlg items-center justify-center h-6 w-6 md:h-8 md:w-8 text-white ${color}`}
          >
            {name?.toUpperCase().slice(0, 1)}
          </span>
          <span className="text-xs sm:text-lg font-medium">{name}</span>
        </div>
        <div>
          <span className=" text-xs sm:text-sm font-medium">{`${new Date(
            date
          ).getDate()}-${months[new Date(date).getMonth()]}-${new Date(
            date
          ).getFullYear()}`}</span>
        </div>
      </div>
      <hr />

      <div className="flex my-4 items-center  w-full ">{question}</div>

      <div className="flex mt-2 items-center justify-between">
        <span className="font-medium sm:text-sm">({ansCount} Answers)</span>
        <div className="text-white py-1 px-2 bg-gray-500 rounded-lg text-sm ">
          {category}
        </div>
      </div>
      <span className="hidden bg-orange-500"></span>
      <span className="hidden bg-green-800"></span>
      <span className="hidden bg-blue-800"></span>
      <span className="hidden bg-yellow-800"></span>
      <span className="hidden bg-purple-500"></span>
    </div>
  );
};

export default QuestionCard;
