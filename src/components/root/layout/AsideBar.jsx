import { AiFillEye, AiFillHeart, AiFillLike } from "react-icons/ai";
import { IoShare } from "react-icons/io5";

const AsideBar = ({ Onpage, views, share, likesOrFans }) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return (
    <aside className="h-full hidden   min-[920px]:block   w-[40%] ">
      <div className=" w-full flex flex-col gap-6  sticky top-20  py-2">
        <div className=" w-full border     border-gray-200 rounded-lg p-4 shadow-lg flex flex-col gap-2 ">
          <h3 className="font-semibold text-gray-800">Reactions</h3>

          <div className="flex gap-4">
            <span className="flex gap-1 flex-col items-center">
              {Onpage == "blogs" ? (
                <AiFillLike className="text-2xl text-gray-500" />
              ) : (
                <AiFillHeart className="text-2xl text-gray-500" />
              )}
              <small className="text-xs ">
                {formatter.format(likesOrFans)}
              </small>
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

          <form className="w-full flex flex-col gap-2 mt-1 ">
            <span className="text-sm text-gray-800">Give us Feedback</span>
            <input
              type="text"
              className="p-2 w-full text-gray-800 outline-none border rounded"
              placeholder="Your feedback..."
            />
            <button className="bg-[#1970d5] p-1 w-28 hover:bg-blue-500 text-white rounded-lg">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col   gap-2">
          <div className=" w-full border border-gray-100 h-48 bg-gray-100 rounded-lg p-4 items-center justify-center shadow-lg flex flex-col gap-2 ">
            <span className="text-center text-gray-400  text-2xl">🖼</span>
          </div>
          <span className="text-[12px] ml-2   text-gray-700">
            ADS PLACEHOLDER
          </span>
        </div>
        <div className=" w-full border   border-gray-200 rounded-lg p-4 shadow-lg flex flex-col gap-2 ">
          <h3 className="font-semibold text-gray-800">Be up to date!</h3>
          <p className="text-sm text-gray-800">
            Get all the stories you need-to-know from Netcico.com every morning
            to your inbox
          </p>
          <form className="w-full flex flex-col gap-2 ">
            <input
              type="text"
              className="p-2 w-full text-gray-800 outline-none border rounded"
              placeholder="🖂 Enter your email!"
            />
            <button className="bg-[#1970d5] p-1 w-28 hover:bg-blue-500 text-white rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default AsideBar;
