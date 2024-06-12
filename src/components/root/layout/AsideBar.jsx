import NewsletterBox from "@/components/forms/NewsletterBox";
import Reactions from "@/components/forms/Reactions";

const AsideBar = ({ Onpage, views, share, likesOrFans }) => {
  return (
    <aside className=" hidden    min-[920px]:block   w-[60%] ">
      <div className=" w-[95%] flex flex-col gap-10  sticky top-20  lg:px-2 py-6">
        <Reactions
          views={views}
          Onpage={Onpage}
          share={share}
          likesOrFans={likesOrFans}
        />
        <div className="flex flex-col   gap-2">
          <div className=" w-full border border-gray-100 h-56 bg-gray-100 rounded-lg p-4 items-center justify-center shadow-lg flex flex-col gap-2 ">
            <span className="text-center text-gray-400  text-2xl">🖼</span>
          </div>
          <span className="text-[12px] ml-2   text-gray-700">
            ADS PLACEHOLDER
          </span>
        </div>
        <NewsletterBox />
      </div>
    </aside>
  );
};

export default AsideBar;
