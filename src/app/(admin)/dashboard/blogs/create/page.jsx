import BlogForm from "@/components/forms/BlogForm "
import { Create_JS_TOOLS } from "@/components/editor/tools";

const page = () => {
  return (
    <BlogForm isUpdate={false} tools={Create_JS_TOOLS} />
  )
}

export default page