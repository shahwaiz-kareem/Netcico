import Image from "next/image";
import { Alegreya } from "next/font/google";

import Link from "next/link";
const alegreya = Alegreya({ subsets: ["cyrillic"], weight: "500" });
const Card = ({
  title,
  thumbnail,
  slug,
  category,
  metaDescription,
  author,
  altText,
  updatedAt,
}) => {
  const newDate = new Date(updatedAt);
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const createdAt = `${date < 10 ? "0" + date : date}-${
    month < 10 ? "0" + month : month
  }-${year}`;

  return (
    <>
      <div className=" transform transition duration-300 hover:scale-105 rounded-xl shadow-lg px-4 pt-2  hover:shadow-xl bg-white   ">
        <div className="py-1 px-2 flex flex-row w-full items-center justify-between">
          <div className="flex flex-row items-center">
            <div className="flex  flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
              <Image
                className="rounded-full  h-8 w-8 object-cover"
                src={thumbnail}
                height={50}
                width={50}
                alt="Profile image"
              />
              <p className="ml-2 text-base font-medium">{author}</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-xs font-semibold text-gray-500">{createdAt}</p>
          </div>
        </div>
        <div>
          <Link href={`/blogs/${category}/${slug}`} className="">
            <Image
              className=" h-[250px]  align-middle  w-full  rounded-2xl"
              src={thumbnail}
              height={300}
              width={800}
              alt={altText}
            />
          </Link>
        </div>

        <div className="py-2 px-2 flex flex-col gap-1">
          <Link href={`/blogs/${category}/${slug}`}>
            <h2 className={alegreya.className + "  md:text-xl font-bold"}>
              {title}
            </h2>
          </Link>
          <p className="inline ">{metaDescription?.slice(0, 100).trim()}...</p>
        </div>
      </div>
    </>
  );
};

export default Card;
