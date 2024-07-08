import { IoCheckmarkCircle, IoCloseCircleSharp } from "react-icons/io5";

const Notify = ({ message, success, notify }) => {
  return (
    <>
      {notify ? (
        <div className="relative items-center inline-block   px-5 py-2 mx-auto md:px-2 lg:px-4 ">
          <div
            className={`p-4 border-l-4 ${
              success
                ? "border-green-500 bg-green-50"
                : "border-red-500 bg-red-50"
            } -6 rounded-r-xl  `}
          >
            <div className="flex">
              <div className="flex-shrink-0">
                {success ? (
                  <IoCheckmarkCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <IoCloseCircleSharp className="w-5 h-5 text-red-400" />
                )}
              </div>
              <div className="ml-3">
                <div
                  className={`text-sm ${
                    success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <p>{message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Notify;
