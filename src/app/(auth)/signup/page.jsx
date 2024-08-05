"use client";

import { registerUserToDB } from "@/actions/auth.action";
import Notify from "@/components/shared/Notify";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/lib/validation/SignUpSchema";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpSchema),
  });
  const [disabled, setDisabled] = useState(true);
  const [notifyObj, setNotifyObj] = useState({
    msg: null,
    notify: false,
    success: null,
  });
  const dismissTimeout = () => {
    setTimeout(() => {
      setNotifyObj({
        msg: null,
        notify: false,
        success: null,
      });
    }, 3000);
  };

  useEffect(() => {
    const { name, email, password, confirmPassword } = watch();
    setDisabled(!(name && email && password && confirmPassword));
  }, [watch()]);

  const submitForm = async (data) => {
    const { name, email, password, confirmPassword } = data;

    try {
      if (confirmPassword !== password) {
        setNotifyObj({
          msg: "Your password did not matched to proceed.",
          notify: true,
          success: false,
        });
        dismissTimeout();
        return;
      }

      const res = await registerUserToDB({ name, email, password });
      setNotifyObj({
        msg: res.message,
        notify: true,
        success: res.success,
      });

      if (res.success) reset(), setDisabled(true), router.push("/signin");
      dismissTimeout();
    } catch (error) {
      setNotifyObj({
        msg: `Some error occurred: ${error.message}`,
        notify: true,
        success: false,
      });
    }
  };

  return (
    <>
      <Notify
        message={notifyObj.msg}
        notify={notifyObj.notify}
        success={notifyObj.success}
      />
      <div className="overflow-hidden flex justify-center">
        <div className="px-6 sm:p-0 flex flex-col shadow-xl mx-auto bg-white rounded-lg my-5">
          <div className="flex mt-8 w-full h-full xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div className="flex items-center justify-center w-full sm:p-10">
              <div className="flex items-center xl:p-1">
                <div className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                  <h3 className="mb-3 text-2xl font-extrabold text-gray-700">
                    Sign Up
                  </h3>
                  <p className="mb-4 text-sm text-gray-700">
                    Sign Up with your Credentials
                  </p>

                  <form onSubmit={handleSubmit(submitForm)}>
                    <input
                      placeholder="Enter your name"
                      {...register("name")}
                      className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 mb-7 placeholder:text-gray-700 bg-gray-100 text-gray-900 rounded-2xl"
                    />
                    {errors.name && (
                      <p className="text-red-500 mb-2  pl-2 text-start text-xs">
                        {errors.name.message}
                      </p>
                    )}

                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email")}
                      className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 mb-7 placeholder:text-gray-700 bg-gray-100 text-gray-900 rounded-2xl"
                    />
                    {errors.email && (
                      <p className="text-red-500 mb-2 pl-2 text-start  text-xs">
                        {errors.email.message}
                      </p>
                    )}

                    <input
                      id="password"
                      type="password"
                      placeholder="Create new password"
                      {...register("password")}
                      className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-200 placeholder:text-gray-700 bg-gray-100 text-gray-900 rounded-2xl"
                    />
                    {errors.password && (
                      <ol className="mb-2 pl-2 list-decimal">
                        {errors.password.message.split(",").map((msg, i) => (
                          <li
                            className="text-gray-500 flex list-disc capitalize   w-full text-xs"
                            key={msg + i}
                          >
                            {i + 1}
                            {")"} {msg}.
                          </li>
                        ))}
                      </ol>
                    )}

                    <input
                      type="password"
                      {...register("confirmPassword")}
                      placeholder="Confirm your password"
                      className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-200 placeholder:text-gray-700 bg-gray-100 text-gray-900 rounded-2xl"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500  text-xs">
                        {errors.confirmPassword.message}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={disabled}
                      className="w-full disabled:bg-gray-600 px-6 py-4 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 bg-blue-500"
                    >
                      Sign Up
                    </button>
                  </form>

                  <p className="text-sm leading-relaxed text-gray-900">
                    Already registered?{" "}
                    <Link
                      href="/signin"
                      className="font-bold underline text-gray-700"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
