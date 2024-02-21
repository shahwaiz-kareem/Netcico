import NavigationBtns from "./NavigationBtns";

const Bottombar = () => {
  return (
    <div className="min-[801px]:hidden bottom-0 w-full justify-between fixed z-30 px-4 sm:px-16 flex py-2 outline-none shadow-2xl bg-white items-center text-white ">
      <NavigationBtns />
    </div>
  );
};

export default Bottombar;
