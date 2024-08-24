"use client";
import { addOrRemoveUpvote, checkUpvoteById } from "@/actions/forum.action";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";

const UpvoteReaction = ({ _id, votes }) => {
  const { data: session, status } = useSession();

  const btnRef = useRef();
  const router = useRouter();
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  const [upvotes, setUpvotes] = useState(votes);
  useEffect(() => {
    const checkStatus = async () => {
      if (session?.user?.id) {
        const res = await checkUpvoteById({ _id, id: session.user.id });
        if (res.isExist)
          btnRef.current.className = "text-blue-500 hover:text-gray-500";
      }
    };
    checkStatus();
  }, [_id, session?.user?.id]);

  const sendUserReaction = async () => {
    if (status === "unathenticated") {
      router.push(`/signin?next=forum/${_id}`);
      return;
    } else {
      const res = await addOrRemoveUpvote({ _id, userId: session?.user?.id });
      if (res.action === "added") {
        btnRef.current.className = "text-blue-500 hover:text-gray-500";
        setUpvotes((prev) => prev + 1);
      }
      if (res.action === "removed") {
        btnRef.current.className = "text-gray-600 hover:text-blue-500";
        setUpvotes((prev) => prev > 0 && prev - 1);
      }
    }
  };

  return (
    <div className="flex bg-none justify-center items-center gap-1 ">
      <button
        ref={btnRef}
        onClick={sendUserReaction}
        className=" text-gray-600 hover:text-blue-500"
      >
        <BiSolidUpvote className=" cursor-pointer text-xl" />
      </button>
      <span className=" text-md">{formatter.format(upvotes)}</span>
    </div>
  );
};

export default UpvoteReaction;
