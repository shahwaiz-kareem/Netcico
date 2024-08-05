"use client";
import { useEffect, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AiFillEye, AiFillHeart, AiFillLike } from "react-icons/ai";
import { addBioFan, checkBioFan } from "@/actions/bio.action";
import { addBlogLike, checkBlogLike } from "@/actions/blog.action";
import FeedBack from "./FeedBack";
import { AppContext } from "@/context/AppContext";

const Reactions = ({ likesOrFans, views, Onpage, _id, slug }) => {
  const { data: session, status } = useSession();
  const context = useContext(AppContext);
  const pathname = usePathname();
  const { isLikedOrFan, setIsLikedOrFan, setPostLikes } = context;
  const router = useRouter();
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  useEffect(() => {
    setPostLikes(likesOrFans);
    if (status !== "authenticated") return;
    const fetchData = async () => {
      if (Onpage === "bio") {
        const res = await checkBioFan(_id, session.user.id);
        setIsLikedOrFan(res.isFan);
      } else if (Onpage === "blogs") {
        const res = await checkBlogLike(_id, session.user.id);
        setIsLikedOrFan(res.isLiked);
      }
    };

    fetchData();
  }, [status, Onpage, _id]);

  const sendUserReaction = async () => {
    if (status !== "authenticated") {
      router.push("/signin");
      return;
    }

    if (Onpage === "bio") {
      const response = await addBioFan(_id, session.user.id, pathname);
      setPostLikes((prev) =>
        response.action === "added" ? prev + 1 : Math.max(prev - 1, 0)
      );
      setIsLikedOrFan(response.action === "added");
    } else if (Onpage === "blogs") {
      const response = await addBlogLike(_id, session.user.id, pathname);
      setPostLikes((prev) =>
        response.action === "added" ? prev + 1 : Math.max(prev - 1, 0)
      );
      setIsLikedOrFan(response.action === "added");
    }
  };

  return (
    <div className="w-full min-[920px]:border min-[920px]:shadow-lg border-gray-200 rounded-lg p-4 flex flex-col gap-2">
      <h3 className="font-semibold text-gray-800">Reactions</h3>

      <div className="flex gap-4">
        <span className="flex gap-1 flex-col items-center">
          {Onpage === "blogs" ? (
            <AiFillLike
              onClick={sendUserReaction}
              className={`text-2xl hover:text-blue-400 cursor-pointer ${
                isLikedOrFan ? "text-blue-500" : "text-gray-500"
              }`}
            />
          ) : (
            <AiFillHeart
              onClick={sendUserReaction}
              className={`text-2xl hover:text-red-400 cursor-pointer ${
                isLikedOrFan ? "text-red-500" : "text-gray-500"
              }`}
            />
          )}
          <small className="text-xs">{formatter.format(likesOrFans)}</small>
        </span>

        <span className="flex gap-1 flex-col items-center">
          <AiFillEye className="text-2xl text-gray-500" />
          <small className="text-xs">{formatter.format(views)}</small>
        </span>
      </div>

      <FeedBack Onpage={Onpage} slug={slug} />
    </div>
  );
};

export default Reactions;
