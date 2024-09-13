import BioContentContainer from "@/components/root/biographies/BioContentContainer";
import { getBioBySlug } from "@/actions/bio.action";

export async function generateMetadata({ params }) {
  console.log(params);
  const data = await getBioBySlug(params.slug);

  return {
    title: data.name || "Default Title",
    description: data.description || "Default Title",
    openGraph: {
      title: data.name || "Default Title",
      description: `Read the biography of ${data.name || "Default Name"}.`,
      url: `${process.env.NEXT_PUBLIC_HOST}/${data.category}/${params.slug}`,
      images: data.thumbnail ? [data.thumbnail] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.name || "Default Title",
      description: data.description || "Default Title",

      image: data.thumbnail,
    },
  };
}

export default async function BioPage({ slug }) {
  return <BioContentContainer slug={slug} />;
}
