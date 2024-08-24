"use client";
import { sendEmail } from "@/actions/newsletter.action";
import { useRef } from "react";

const NewsletterBox = ({ Onpage, slug }) => {
  const formRef = useRef();
  let limit = 0;
  const submitUserEmail = async (formData) => {
    const email = formData.get("email");
    if (email && limit < 5) {
      await sendEmail(Onpage, slug, email);
    }
    limit++;
    formRef.current.reset();
  };

  return (
    <div className=" w-full min-[920px]:border   border-gray-200 rounded-lg p-4 min-[920px]:shadow-lg  flex flex-col gap-2 ">
      <h3 className="font-semibold text-gray-800">Be up to date!</h3>
      <p className="text-sm text-gray-800">
        Get all the stories you need-to-know from Netcico.com every morning to
        your inbox
      </p>
      <form
        action={submitUserEmail}
        ref={formRef}
        maxLength={250}
        minLength={4}
        className="w-full flex flex-col max-[920px]:flex-row gap-2 max-[920px]:gap-0 "
      >
        <input
          type="email"
          name="email"
          className="p-2 w-full text-gray-800 outline-none border rounded"
          placeholder="🖂 Enter your email!"
        />
        <button className="bg-[#1970d5] p-1 max-[920px]:py-0 w-28 hover:bg-blue-500 text-white rounded-lg max-[920px]:rounded-l-none">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
