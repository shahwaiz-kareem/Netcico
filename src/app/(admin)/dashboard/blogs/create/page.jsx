import BlogForm from "@/components/forms/BlogForm ";
import { Create_JS_TOOLS } from "@/components/editor/tools";

const Page = () => {
  return <BlogForm isUpdate={false} tools={Create_JS_TOOLS} />;
};

export default Page;
