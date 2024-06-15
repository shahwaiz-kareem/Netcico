import BioCard from "@/components/root/biographies/Card";
import { getPopularBiosByViews } from "@/actions/bio.action";

const BioContainerSSR = async () => {
  const biographies = await getPopularBiosByViews(1, 6);
  return (
    <>
      {biographies.map((bio) => (
        <BioCard
          name={bio.name}
          fans={bio.fans.length}
          slug={bio.slug}
          views={bio.views.length}
          share={bio.share.length}
          thumbnail={bio.thumbnail}
          key={bio._id}
          category={bio.category}
          altText={bio.altText}
        ></BioCard>
      ))}
    </>
  );
};

export default BioContainerSSR;
