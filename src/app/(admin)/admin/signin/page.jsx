"use client";
import { authenticateAdmin } from "@/actions/auth.action";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    const result = await authenticateAdmin(e.target.password.value);

    if (result.success) {
      router.push("/dashboard");
    } else {
      alert(`Some error occurred: ${!result.success && result.error}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <form
        className="p-4 rounded-lg border border-white gap-4 flex  justify-center flex-col"
        onSubmit={submit}
      >
        <input
          name="password"
          placeholder="Enter you password"
          type="password"
          minLength={4}
          className="p-2 rounded "
        />
        <button className="text-white bg-blue-500 px-4 py-2 rounded-lg">
          SignIn
        </button>
      </form>
    </div>
  );
};

export default page;
