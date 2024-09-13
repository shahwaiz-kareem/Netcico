"use client";

import { createAnswer } from "@/actions/forum.action";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ForumAnswerForm = ({ parentId, path }) => {
  const { data: session, status } = useSession();
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [notification, setNotification] = useState({
    isError: false,
    message: "",
    show: false,
  });
  const formRef = useRef();
  const router = useRouter();
  const showNotification = (isError, message, show) => {
    setNotification({
      isError,
      message,
      show,
    });

    setTimeout(() => {
      setNotification({
        isError: false,
        message: "",
        show: false,
      });
    }, 4000);
  };
  const submitForm = async (formData) => {
    const text = formData.get("answer");
    if (status === "authenticated") {
      const res = await createAnswer({
        parentId,
        name: session?.user?.name,
        text,
        path,
      });
      showNotification(!res.success, res.message, true);
      if (res.success) setBtnDisabled(true), formRef.current.reset();
    } else {
      showNotification(true, "Login to proceed!", true);
      router.push(
        `/signin?next=${path.startsWith("/") ? path.slice(0) : path}`
      );
      sessionStorage.setItem(
        "userForumAnswer",
        JSON.stringify({ parentId, text })
      );
    }
  };
  useEffect(() => {
    if (sessionStorage.getItem("userForumAnswer")) {
      const sendObj = JSON.parse(sessionStorage.getItem("userForumAnswer"));
      formRef.current.answer.value = sendObj.text;
      setBtnDisabled(sendObj.text.length === 0);
      sessionStorage.removeItem("userForumAnswer");
    }
  }, []);
  return (
    <div className="flex gap-2 px-2 lg:px-0 flex-col lg:w-1/2">
      <h1 className="text-md  font-semibold  ">Post your answer here:</h1>
      {notification.show ? (
        <span
          className={`${
            notification.isError ? "text-red-400" : "text-green-400"
          } text-xs `}
        >
          {notification.message}
        </span>
      ) : null}
      <form
        ref={formRef}
        action={submitForm}
        className="flex items-center justify-center flex-col gap-2"
      >
        <textarea
          onChange={(e) => {
            setBtnDisabled(e.target.value.length === 0);
          }}
          className="w-full h-24  sm:h-32 p-2 rounded-lg border outline-none"
          placeholder="Your answer..."
          name="answer"
          minLength={3}
          maxLength={10000}
          cols="30"
          rows="10"
        ></textarea>
        <div className="w-full">
          <button
            disabled={isBtnDisabled}
            type="submit"
            className="py-1 px-4 disabled:bg-gray-500  outline-none text-white bg-blue-500 rounded-md "
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForumAnswerForm;
