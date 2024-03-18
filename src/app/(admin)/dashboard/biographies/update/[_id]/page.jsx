import UpdateBio from "@/components/dashboard/biograhpy/UpdateBio";

const page = ({ params }) => {
  console.log(params);
  return <UpdateBio params={params} />;
};

export default page;
