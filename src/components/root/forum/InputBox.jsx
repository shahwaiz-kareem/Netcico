"use client";
import { createQuestion } from "@/actions/forum.action";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";

const InputBox = () => {
  const router = useRouter();
  const [categoryInpDisabled, setCategoryInpDisabled] = useState(true);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const formRef = useRef();

  const [notification, setNotification] = useState({
    isError: false,
    message: "",
    show: false,
  });

  const [forumReqData, setForumReqData] = useState({
    text: "",
    category: "",
    name: "",
  });

  const { data: session, status } = useSession();
  const sendData = async (sendObj) => {
    await createQuestion(sendObj);
    formRef.current.reset();
    setForumReqData({
      text: "",
      category: "",
      name: "",
    });
  };

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
    }, 3000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (forumReqData.category === "")
      return showNotification(true, "Please select a category!", true);
    if (status === "authenticated") {
      const sendObj = { ...forumReqData, name: session?.user?.name };
      await sendData(sendObj);
      showNotification(false, "Your question has been posted!", true);
    } else {
      router.push(`/signin?next=forum`);
      sessionStorage.setItem("userForumMessage", JSON.stringify(forumReqData));
    }
  };

  const onChange = async (e) => {
    setCategoryInpDisabled(e.target.value.length === 0);
    setForumReqData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (sessionStorage.getItem("userForumMessage")) {
      const sendObj = JSON.parse(sessionStorage.getItem("userForumMessage"));
      formRef.current.text.value = sendObj.text;
      formRef.current.category.value = sendObj.category;
      setCategoryInpDisabled(sendObj.text.length === 0);
      setForumReqData({
        text: sendObj.text,
        category: sendObj.category,
        name: session?.user?.name || "",
      });
      sessionStorage.removeItem("userForumMessage");
    }
  }, []);

  useEffect(() => {
    setIsBtnDisabled(forumReqData.text === "" && forumReqData.category === "");
  }, [forumReqData.text, forumReqData.category]);

  return (
    <div className="w-full md:w-[60vw]   box-border shadow-sm flex flex-col  pb-8  rounded-lg gap-2 pt-4 px-4 sm:px-8 border">
      <div className="flex sm:flex-col gap-2">
        <h2 className="text-black text-lg  ">Ask from people </h2>
        {notification.show ? (
          <span
            className={`${
              notification.isError ? "text-red-400" : "text-green-400"
            } text-xs `}
          >
            {notification.message}
          </span>
        ) : null}
      </div>
      <form
        onSubmit={onSubmit}
        ref={formRef}
        className="flex  justify-center items-center gap-4 w-full "
      >
        <div className="flex flex-col md:flex-row  justify-center gap-2 items-center  w-full ">
          <input
            onChange={onChange}
            type="text"
            name="text"
            placeholder="Write your question..."
            className="border p-4  rounded-lg w-full outline-none"
          />
          <div className="flex self-start md:self-auto items-center justify-center gap-4">
            <select
              onChange={onChange}
              name="category"
              disabled={categoryInpDisabled}
              className="p-4  rounded-lg outline-none"
            >
              <option disabled selected value="">
                Category
              </option>
              <option value="health">health</option>
              <option value="sports">sports</option>
              <option value="cooking">cooking</option>
            </select>
            <button
              className="md:hidden"
              disabled={isBtnDisabled}
              type="submit"
            >
              <IoSend
                className={`text-2xl ${
                  isBtnDisabled ? "text-gray-500 hover:text-gray-400" : ""
                }  font-bold text-blue-500 cursor-pointer hover:text-blue-600`}
              />
            </button>
          </div>
        </div>
        <button
          className=" hidden md:block"
          disabled={isBtnDisabled}
          type="submit"
        >
          <IoSend
            className={`text-2xl ${
              isBtnDisabled ? "text-gray-500 hover:text-gray-400" : ""
            }  font-bold text-blue-500 cursor-pointer hover:text-blue-600`}
          />
        </button>
      </form>
    </div>
  );
};

export default InputBox;
