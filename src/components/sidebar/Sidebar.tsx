import { RxCrossCircled } from "react-icons/rx";
import Cross from "./Cross";
import SidebarElement from "./SidebarElement";
import { FiBarChart2 } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";
import { IoDocumentOutline } from "react-icons/io5";


const Sidebar = () => {
  return (
    <div>
      <div
        className="sidebar bg-white
       h-[100vh] -translate-x-[220px] z-20 max-[768px]:absolute max-[768px]:top-0 max-[768px]:left-0 md:relative md:translate-x-0"
      >
        <div className="w-[220px] lg:w-[240px]  h-[100%] flex flex-col pt-10 md:pt-0 border-r-2 ">

       <Cross></Cross>

       <div className="flex flex-col gap-y-2 pr-4 mt-10">
        <SidebarElement title="Dashboard" Icon={FiBarChart2}></SidebarElement>
        <SidebarElement title="Skill Test" Icon={SlBadge}></SidebarElement>
        <SidebarElement title="Internship" Icon={IoDocumentOutline}></SidebarElement>
       </div>

        </div>

        
        {/* <div className="text-black text-2xl">Hello</div> */}
      </div>
    </div>
  );
};

export default Sidebar;
