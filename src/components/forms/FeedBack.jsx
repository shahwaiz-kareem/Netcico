import { sendFeedback } from "@/actions/feedback.action";

const FeedBack = ({ Onpage, slug }) => {
  const submitUserFeedBack = async (formData) => {
    const feedback = formData.get("feedback");
    await sendFeedback(Onpage, slug, feedback);
  };
  return (
    <form
      action={submitUserFeedBack}
      className="w-full flex flex-col gap-2 mt-1  max-[920px]:flex-row  max-[920px]:gap-0 "
    >
      <div className="w-full flex flex-col h-full ">
        <span className="text-sm mb-1 text-gray-800">Give us Feedback</span>
        <div className="flex flex-col  max-[920px]:gap-0 gap-2  max-[920px]:flex-row ">
          <input
            type="text"
            name="feedback"
            className="p-2 w-full text-gray-800 outline-none border rounded"
            placeholder="Your feedback..."
          />
          <button className="bg-[#1970d5] h-full  max-[920px]:py-0 max-[920px]:rounded-l-none  p-1 w-28 hover:bg-blue-500 text-white rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FeedBack;
