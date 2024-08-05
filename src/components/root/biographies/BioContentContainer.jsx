import TabComponent from "@/components/root/biographies/TabComponent";
import Image from "next/image";

import { getBioBySlug } from "@/actions/bio.action";
import BioTabPanel from "./BioTabPanel";
import BioGalleryTabPanel from "./BioGalleryTabPanel";
import BioTablePanel from "./BioTablePanel";

const BioContentContainer = async ({ slug }) => {
  const data = await getBioBySlug(slug);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div>
          <main className="bg-gray-100 bg-opacity-25">
            <div className=" lg:mx-auto mb-8">
              <header className="flex flex-wrap max-md:gap-4 items-center p-4 md:py-8">
                <div className="md:w-3/12 md:ml-16">
                  <Image
                    width={200}
                    height={150}
                    className="w-20 h-20 md:w-40 md:h-40  rounded-full
                   border-2 border-blue-500 p-1"
                    src={data.thumbnail}
                    alt="profile"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-light imp-light  text-3xl text-gray-800  md:mr-2 mb-2 sm:mb-0">
                    {data.name}
                  </h2>
                  <div>
                    <h1 className="font-semibold mb-1">{data.category}</h1>
                    <p>Read interesting biography of {data.name} </p>
                  </div>
                </div>
              </header>
            </div>
          </main>
        </div>
        <main>
          <TabComponent
            children={[
              <BioTabPanel data={data} key={"Bio_Tab_Panel_97345"} />,
              <BioGalleryTabPanel
                key={"Bio_Gallery_Panel_79823"}
                data={data.gallery}
              />,
              <BioTablePanel
                tableData={data.table}
                key={"Bio_Table_Panel_52345"}
              />,
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default BioContentContainer;
