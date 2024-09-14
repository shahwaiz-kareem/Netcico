import BlogForm from "@/components/forms/BlogForm ";
import { Create_JS_TOOLS } from "@/components/editor/tools";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <BlogForm isUpdate={false} tools={Create_JS_TOOLS} />
    </Suspense>
  );
};

export default Page;
