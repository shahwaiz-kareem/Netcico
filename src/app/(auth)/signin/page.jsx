"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/lib/validation/SignInSchema";
import { useEffect, useState } from "react";
import Notify from "@/components/shared/Notify";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next");
  console.log(next);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setDisabled(!(value.email && value.password));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

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

  const credentialSubmit = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (res?.error) {
      setNotifyObj({
        msg: res.error.message,
        notify: true,
        success: false,
      });
    } else {
      setNotifyObj({
        msg: "Signed in successfully!",
        notify: true,
        success: true,
      });
      setDisabled(true);
      console.log(next);
      router.push(`/${next}` || "/");
    }

    dismissTimeout();
  };

  return (
    <>
      <Notify
        message={notifyObj.msg}
        notify={notifyObj.notify}
        success={notifyObj.success}
      />
      <div className=" overflow-hidden flex  justify-center">
        <div className=" p-6 sm:p-0 flex flex-col shadow-xl mx-auto bg-white rounded-lg  my-5">
          <div className="flex mt-6  w-full h-full  xl:gap-14 lg:justify-normal md:gap-5 ">
            <div className="flex items-center justify-center w-full sm:p-10">
              <div className="flex items-center xl:p-1">
                <div className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                  <h3 className="mb-3 text-2xl font-extrabold text-gray-700">
                    Sign In
                  </h3>
                  <p className="mb-4 text-sm text-gray-700">
                    Sign In with Google OR Credentials
                  </p>
                  <button
                    onClick={async () =>
                      await signIn("google", {
                        callbackUrl: next ? `/${next}` : "/",
                      })
                    }
                    className="flex items-center justify-center gap-2 w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 256 262"
                    >
                      <path
                        fill="#4285f4"
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      />
                      <path
                        fill="#34a853"
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      />
                      <path
                        fill="#fbbc05"
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                      />
                      <path
                        fill="#eb4335"
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                  <div className="flex items-center mb-3">
                    <hr className="h-0 border-b border-solid border-gray-500 grow" />
                    <p className="mx-4 text-gray-600">or</p>
                    <hr className="h-0 border-b border-solid border-gray-500 grow" />
                  </div>

                  <form action={handleSubmit(credentialSubmit)}>
                    <div className="flex flex-col gap-2 w-full">
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Enter you email"
                        className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 mb-7 placeholder:text-gray-700 bg-gray-100 text-gray-900 rounded-2xl"
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <input
                        type="password"
                        {...register("password")}
                        placeholder="Enter your password"
                        className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-200  placeholder:text-gray-700 bg-gray-100 text-gray-900 rounded-2xl"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={disabled}
                      className="w-full px-6 py-4 mb-5 text-sm font-bold leading-none disabled:bg-gray-500 text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 bg-blue-500"
                    >
                      Sign In
                    </button>
                  </form>

                  <p className="text-sm leading-relaxed text-gray-900">
                    Not registered yet?{" "}
                    <Link
                      href="/signup"
                      className="font-bold underline text-gray-700"
                    >
                      Create an Account
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
