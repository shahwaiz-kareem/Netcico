"use client";
import { sendFeedback } from "@/actions/feedback.action";
import { useRef } from "react";

const FeedBack = ({ Onpage, slug }) => {
  const formRef = useRef();
  let limit = 0;

  const submitUserFeedBack = async (formData) => {
    const feedback = formData.get("feedback");
    if (limit < 5) {
      await sendFeedback(Onpage, slug, feedback);
    }
    limit++;
    formRef.current.reset();
  };
  return (
    <form
      action={submitUserFeedBack}
      ref={formRef}
      className="w-full flex flex-col gap-2 mt-1  max-[920px]:flex-row  max-[920px]:gap-0 "
    >
      <div className="w-full flex flex-col h-full ">
        <span className="text-sm mb-1 text-gray-800">Give us Feedback</span>
        <div className="flex flex-col  max-[920px]:gap-0 gap-2  max-[920px]:flex-row ">
          <input
            type="text"
            name="feedback"
            maxLength={250}
            minLength={4}
            className="p-2 w-full  text-gray-800 outline-none border rounded"
            placeholder="Your feedback... "
          />
          <button className="bg-[#1970d5]   max-[920px]:py-0 max-[920px]:rounded-l-none  px-1   w-28 hover:bg-blue-500 text-white rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FeedBack;
