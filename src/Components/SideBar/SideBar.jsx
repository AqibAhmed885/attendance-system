import { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

import { FaPersonDressBurst } from "react-icons/fa6";
import { IoIosPerson, IoMdArrowDropdown} from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

import { CiClock2 } from "react-icons/ci";
// import { GiQueenCrown } from "react-icons/gi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col bg-white text-gray-900 ${
        isCollapsed ? "items-center  w-20" : "w-72"
      } transition-width duration-300 `}
    >
      <div className="flex text-2xl font-bold gap-2 m-2">
        <img
          src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
          alt="Profile"
          className="rounded-full w-8 h-8"
        />
        <span>LHD LTD</span>
      </div>
      <Link to={"profile"} className="mt-4 flex flex-col items-center">
        <img
          src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
          alt="Profile"
          className="rounded-full w-20 h-20"
        />
        <div className="flex flex-col mt-2 gap-2 text-center ">
          <div className="font-semibold">Faisal Khan</div>
          <div className="text-sm text-white bg-pink-500 px-4 py-2 rounded-md">
            Web Developer
          </div>
        </div>
      </Link>
      <div className="flex flex-col mt-5 ">
        <div className="pt-5 hover:text-black  ">
          <SidebarItem
            Icon={MdOutlineDashboard}
            label="Dashboard"
            isCollapsed={isCollapsed}
            link={"/dashboard"}
          />
        </div>

        <div className="relative ">
          {/* Attendance Button */}
          <button
            onClick={toggleMenu}
            className="flex items-center gap-4 w-full p-4 bg-gray-00 text-gray rounded-lg focus:outline-none"
          >
            <FaRegCalendarCheck />
            <span>Attendance</span>
            <span className="">
              <IoMdArrowDropdown  className="" />
            </span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="flex flex-col text-gray-900 m-2 rounded-lg shadow-lg">
              <Link
                to={"/office-setting"}
                className="flex gap-6 item4-center p-4 hover:text-black  hover:bg-gray-200"
              >
                <CiClock2 className=" font-semibold text-[1.5rem] " />
                <span>Office Setting</span>
                {/* <GiQueenCrown className="text-orange-400" /> */}
              </Link>
              <Link
                to={"employees"}
                className="flex gap-4 items-center p-4 hover:text-black hover:bg-gray-200"
              >
                <FaPersonDressBurst className="font-semibold text-[1.5rem] " />
                Employees List
                {/* <GiQueenCrown className="text-orange-400" /> */}
              </Link>
              <Link
                to={"attendance"}
                className="flex gap-4 items-center p-4  hover:text-black hover:bg-gray-200"
              >
                <IoIosPerson className="font-semibold text-[1.5rem] " />
                My Attendance
                {/* <GiQueenCrown className="text-orange-400" /> */}
              </Link>
              <Link
                to={"mark-attendance"}
                className="flex gap-4 items-center p-4 hover:text-black hover:bg-gray-200"
              >
                <IoCheckmarkDoneCircleOutline className="font-semibold text-[1.5rem] " />
                Mark Attendance
                {/* <GiQueenCrown className="text-orange-400" /> */}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ Icon, label, isCollapsed, link }) => (
  <Link
    to={link}
    className="flex items-center gap-2 px-4 py-3 hover:bg-gray-200 cursor-pointer"
  >
    <Icon className="text-xl" />
    {!isCollapsed && (
      <div>
        <span>{label}</span>
      </div>
    )}
  </Link>
);

export default Sidebar;
