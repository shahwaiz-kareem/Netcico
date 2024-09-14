import UpdateBio from "@/components/dashboard/biograhpy/UpdateBio";

const Page = ({ params }) => {
  console.log(params);
  return <UpdateBio params={params} />;
};

export default Page;
