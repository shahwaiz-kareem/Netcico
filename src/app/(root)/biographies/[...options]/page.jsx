import { getPublishedBiosByCategory } from "@/actions/bio.action";
import BioCard from "@/components/root/biographies/Card";
import { BsHeartbreakFill } from "react-icons/bs";
import BioContentContainer from "@/components/root/biographies/BioContentContainer";

export const metadata = {
  title: "Biographies || Netcico",
  description:
    "Age, gender, height, early life and  intresting biographies of popular people around the world.",
};

const Page = async ({ params }) => {
  const biographies = await getPublishedBiosByCategory(params.options[0]);
  return (
    <>
      {params.options.length <= 1 ? (
        <>
          <div className=" mt-2">
            <span className=" flex items-center flex-wrap gap-2 text-xl  md:text-2xl   sm:text-left pl-4 text-gray-800 ">
              Biographies of {params.options[0]}
              <p className="text-sm"> ({biographies.length} results found)</p>
            </span>
          </div>
          <section className="flex flex-row flex-wrap mx-auto  h-full">
            {biographies.map((bio) => (
              <BioCard
                klj
                name={bio.name}
                slug={bio.slug}
                fans={bio.fans.length}
                views={bio.views.length}
                share={bio.share.length}
                thumbnail={bio.thumbnail}
                key={bio._id}
                category={bio.category}
                altText={bio.altText}
              ></BioCard>
            ))}
            {biographies.length === 0 ? (
              <div className=" flex items-center mt-12 justify-center gap-2  flex-col w-full h-full">
                <BsHeartbreakFill className="text-3xl " />
                <h3 className="text-xl  text-center ">
                  Sorry, no post yet in this category!
                </h3>
              </div>
            ) : null}
          </section>
        </>
      ) : (
        <BioContentContainer slug={params.options[1]} />
      )}
    </>
  );
};

export default Page;
