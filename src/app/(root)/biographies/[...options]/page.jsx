import { getBioBySlug, getPublishedBiosByCategory } from "@/actions/bio.action";
import BioCard from "@/components/root/biographies/Card";
import { BsHeartbreakFill } from "react-icons/bs";
import { headers } from "next/headers";

import BioContentContainer from "@/components/root/biographies/BioContentContainer";

export async function generateMetadata({ params }) {
  const slug = params?.options[1];
  const data = await getBioBySlug(slug);

  return {
    title:
      `Read intresting biography of ${data.name}` || "Biographies || Netcico",
    description:
      data.metaDescription ||
      "Age, gender, height, early life and interesting biographies of popular people around the world.",
    openGraph: {
      title:
        `Read interesting and amazing biography of ${data.name}` ||
        "Biographies || Netcico",
      description:
        data.metaDescription ||
        "Age, gender, height, early life and interesting biographies of popular people around the world.",
      url: `${process.env.NEXT_PUBLIC_HOST}/${params.options[0]}/${slug}`,
      images: data.thumbnail
        ? [`${process.env.NEXT_PUBLIC_HOST}/${data.thumbnail}`]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title:
        `Read interesting and amazing biography of ${data.name}` ||
        "Biographies || Netcico",
      description:
        data.metaDescription ||
        "Age, gender, height, early life and interesting biographies of popular people around the world.",
      image: `${process.env.NEXT_PUBLIC_HOST}/${data.thumbnail}`,
    },
  };
}

const Page = async ({ params }) => {
  const biographies = await getPublishedBiosByCategory(params.options[0]);

  const requestHeaders = headers();
  const token = requestHeaders.get("user-token");

  if (token) {
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/track/bio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "user-token": token,
        slug: params.options[1],
      },
    });
  }

  return (
    <>
      {params.options.length <= 1 ? (
        <>
          <div className="mt-2">
            <span className="flex items-center flex-wrap gap-2 text-xl md:text-2xl sm:text-left pl-4 text-gray-800">
              Biographies of {params.options[0]}
              <p className="text-sm"> ({biographies.length} results found)</p>
            </span>
          </div>
          <section
            className={`${
              biographies.length === 0
                ? "flex flex-row flex-wrap mx-auto h-full"
                : "grid sm:grid-cols-1 gap-6 mt-1 md:grid-cols-2 lg:grid-cols-3 w-full px-2"
            }`}
          >
            {biographies.map((bio, index) => (
              <BioCard
                name={bio.name}
                slug={bio.slug}
                fans={bio.fans.length}
                views={bio.views.length}
                share={bio.share.length}
                thumbnail={bio.thumbnail}
                key={`${bio._id}_${index}_csr`}
                category={bio.category}
                altText={bio.altText}
              ></BioCard>
            ))}
            {biographies.length === 0 ? (
              <div className="flex items-center mt-12 justify-center gap-2 flex-col w-full h-full">
                <BsHeartbreakFill className="text-3xl" />
                <h3 className="text-xl text-center">
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
