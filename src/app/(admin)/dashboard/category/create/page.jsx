"use client";
import { addCategory } from "@/actions/category.action";
import { categorySchema } from "@/lib/validation/CategorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CategoryForm = () => {
  const [successObj, setSuccessObj] = useState({
    success: false,
    message: "",
  });
  const [successDisplay, setSuccessDisplay] = useState("hidden");

  const { register, getValues } = useForm({
    defaultValues: {
      category: "",
      type: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(categorySchema),
  });

  const sendData = async (e) => {
    e.preventDefault();
    const { category, type } = getValues();
    const { message, success } = await addCategory(category, type);
    setSuccessObj({ message, success });
    setSuccessDisplay("flex");
    setTimeout(() => {
      setSuccessDisplay("hidden");
    }, 3000);
  };
  return (
    <>
      <section className="w-full flex  gap-2 items-center flex-col justify-center">
        <h1 className="text-2xl text-white mb-4"> Add New Category</h1>
        <span
          className={`px-4 ${successDisplay} py-1 capitalize shadow-2xl text-white pl-2 ${
            successObj.success ? "bg-green-500 " : "bg-red-500 "
          }`}
        >
          {successObj.message}
        </span>
        <form onSubmit={sendData} className="flex relative flex-col gap-8">
          <input
            type="text"
            placeholder="Category"
            className="px-2 py-3 rounded-lg bg-zinc-900 outline-none"
            {...register("category")}
          />
          <select
            className={`p-2  flex gap-2 outline-none   mt-2  rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5 }`}
            {...register("type")}
          >
            <option
              className=" block rounded-md  w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer"
              value="blogs"
            >
              Blogs
            </option>
            <option
              className=" block rounded-md  w-full px-4 py-2 text-lg text-white hover:bg-gray-500 cursor-pointer"
              value="biographies"
            >
              Biographies
            </option>
          </select>
          <button
            className="bg-blue-500 text-white  rounded-lg p-2 flex items-center justify-center "
            type="submit"
          >
            Add
          </button>
        </form>
      </section>
    </>
  );
};

export default CategoryForm;
