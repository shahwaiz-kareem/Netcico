import { AiFillEye, AiFillHeart, AiFillLike } from "react-icons/ai";
import { IoShare } from "react-icons/io5";

const Reactions = ({ views, Onpage, share, likesOrFans }) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <div className=" w-full  min-[920px]:border  min-[920px]:shadow-lg   border-gray-200 rounded-lg p-4  flex flex-col gap-2 ">
      <h3 className="font-semibold text-gray-800">Reactions</h3>

      <div className="flex gap-4">
        <span className="flex gap-1 flex-col items-center">
          {Onpage == "blogs" ? (
            <AiFillLike className="text-2xl text-gray-500" />
          ) : (
            <AiFillHeart className="text-2xl text-gray-500" />
          )}
          <small className="text-xs ">{formatter.format(likesOrFans)}</small>
        </span>

        <span className="flex gap-1 flex-col items-center">
          <AiFillEye className="text-2xl text-gray-500" />
          <small className="text-xs ">{formatter.format(views)}</small>
        </span>

        <span className="flex gap-1 flex-col items-center">
          <IoShare className="text-2xl text-gray-500" />
          <small className="text-xs ">{formatter.format(share)}</small>
        </span>
      </div>

      <form className="w-full flex flex-col gap-2 mt-1  max-[920px]:flex-row  max-[920px]:gap-0 ">
        <div className="w-full flex flex-col h-full ">
          <span className="text-sm mb-1 text-gray-800">Give us Feedback</span>
          <div className="flex flex-col  max-[920px]:gap-0 gap-2  max-[920px]:flex-row ">
            <input
              type="text"
              className="p-2 w-full text-gray-800 outline-none border rounded"
              placeholder="Your feedback..."
            />
            <button className="bg-[#1970d5] h-full  max-[920px]:py-0 max-[920px]:rounded-l-none  p-1 w-28 hover:bg-blue-500 text-white rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reactions;
