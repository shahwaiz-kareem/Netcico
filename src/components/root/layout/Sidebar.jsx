import NavigationBtns from "./NavigationBtns";

const Sidebar = () => {
  return (
    <aside className="max-[800px]:hidden pt-32 sticky right-0 top-0 z-20 flex  h-screen w-fit  flex-col space-y-16 px-4 outline-none   bg-white items-center text-white">
      <NavigationBtns />
    </aside>
  );
};

export default Sidebar;
