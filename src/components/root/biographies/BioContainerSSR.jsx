import BioCard from "@/components/root/biographies/Card";
import { getPopularBiosByViews } from "@/actions/bio.action";

const BioContainerSSR = async () => {
  const biographies = await getPopularBiosByViews(1, 6);
  return (
    <>
      {biographies.map((bio) => (
        <BioCard
          name={bio.name}
          slug={bio.slug}
          fans={bio.fansCount}
          views={bio.viewsCount}
          thumbnail={bio.thumbnail}
          key={bio._id}
          category={bio.category}
          altText={bio.altText}
        ></BioCard>
      ))}
      {biographies.length === 0 && (
        <div className="text-center text-xl font-normal my-4">
          No post added yet!
        </div>
      )}
    </>
  );
};

export default BioContainerSSR;
