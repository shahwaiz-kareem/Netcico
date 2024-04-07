import TabComponent from "@/components/root/biographies/TabComponent";
import Image from "next/image";
import { AiTwotoneHeart } from "react-icons/ai";
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
              <header className="flex flex-wrap items-center p-4 md:py-8">
                <div className="md:w-3/12 md:ml-16">
                  <Image
                    width={700}
                    height={500}
                    className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                   border-2 border-blue-500 p-1"
                    src={data.thumbnail}
                    alt="profile"
                  />
                </div>

                <div className="w-8/12 md:w-7/12 ">
                  <div className="md:flex md:flex-wrap md:items-center mb-4">
                    <h2 className="font-light imp-light  text-3xl text-gray-800  md:mr-2 mb-2 sm:mb-0">
                      {data.name}
                    </h2>

                    <span
                      className="inline-block fas fa-certificate fa-lg text-blue-500 
                      mr-6 text-xl transform -translate-y-2"
                      aria-hidden="true"
                    >
                      <i
                        className="fas fa-check text-white text-xs absolute inset-x-0
                     ml-1 mt-px"
                      />
                    </span>

                    <button
                      href="#"
                      className="flex justify-center items-center gap-2 bg-[#1970d5] hover:bg-blue-600  px-4 py-1 
              text-white font-semibold text-md rounded  text-center 
              "
                    >
                      <AiTwotoneHeart className="text-xl hover:text-red-500" />
                      Fan
                    </button>
                  </div>

                  <ul className="hidden md:flex space-x-8 mb-4">
                    <li className="flex gap-2">
                      <span className="font-semibold">40.5k</span>
                      Fans
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold">302</span>
                      Views
                    </li>
                  </ul>
                  {/* user meta form medium screens */}
                  <div className="hidden md:block">
                    <h1 className="font-semibold">{data.category}</h1>

                    <p></p>
                  </div>
                </div>
                {/* user meta form small screens */}
                <div className="md:hidden text-sm my-2">
                  <h1 className="font-semibold">Mr Travlerrr...</h1>
                  <span>Travel, Nature and Music</span>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </header>
              {/* posts */}
              <div className="px-px md:px-3">
                {/* user following for mobile only */}
                <ul
                  className="flex md:hidden justify-around space-x-8 border-t 
      text-center p-2 text-gray-600 leading-snug text-sm"
                >
                  <li>
                    <span className="font-semibold text-gray-800 block">
                      136
                    </span>
                    posts
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800 block">
                      40.5k
                    </span>
                    followers
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800 block">
                      302
                    </span>
                    following
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
        <main>
          <TabComponent
            children={[
              <BioTabPanel data={data} />,
              <BioGalleryTabPanel data={data.gallery} />,
              <BioTablePanel tableData={data.table} />,
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default BioContentContainer;
