import React, { useState } from "react";
import { FaApple, FaAndroid } from "react-icons/fa";
import { IoIosArrowDown, IoMdColorPalette } from "react-icons/io";
import { LuShieldAlert } from "react-icons/lu";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center bg-gray-200 -500 text-gray-700 px-4 py-2 rounded-md shadow-md"
        >
          <img
            src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg" // Replace with actual profile image URL
            alt="Profile"
            className="rounded-full w-8 h-8 mr-2"
          />
          Faisal Khan
          <IoIosArrowDown className="ml-2" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute top-14 right-8 mt-2 w-72 rounded-lg shadow-sm shadow-gray-300 bg-gray-100 text-gray-700 ">
          <div className="flex justify-between items-center p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg" // Replace with actual profile image URL
                  alt="Profile"
                  className="rounded-full w-10 h-10 mr-2"
                />
                <div>
                  <p className="text-[1rem] font-semibold">Faisal Khan</p>
                  <p className="text-sm ">Web Developer</p>
                </div>
              </div>
            </div>
            <button className=" border border-pink-500 shadow-lg px-2 text-pink-500 mt-2 py-1 rounded-md">
              Profile
            </button>
          </div>

          <div className="">
            <div className="flex items-center justify-between px-4 py-3 hover:shadow-md hover:shadow-gray-200  cursor-pointer">
              <div className="flex gap-1 items-center ">
                <IoMdColorPalette className="text-2xl" />

                <span className="font-semibold">Theme</span>
                <span className="bg-pink-500 text-xs py-0.5 px-1 font-semibold rounded-lg">
                  BETA
                </span>
              </div>
              <IoIosArrowDown className="ml-2" />
            </div>
            {/* <div className="flex items-center px-4 py-3 hover:bg-gray-800 cursor-pointer">
              <FaApple className="text-2xl mr-3" />
              <span>Hikal CRM iOS</span>
              <span className="ml-auto text-gray-400">
                <FaApple />
              </span>
            </div>
            <div className="flex items-center px-4 py-3 hover:bg-gray-800 cursor-pointer">
              <FaAndroid className="text-2xl mr-3" />
              <span>Hikal CRM Android</span>
              <span className="ml-auto text-gray-400">
                <FaAndroid />
              </span>
            </div> */}
            <Link
              to={"profilepassword"}
              className="flex items-center gap-2 px-4 py-3 hover:shadow-md hover:shadow-gray-200   cursor-pointer"
            >
              <LuShieldAlert className="text-2xl" />

              <span className="font-semibold">Change password</span>
            </Link>
            <Link
              to={"/"}
              className="flex items-center gap-2 px-4 py-3 hover:shadow-md hover:shadow-gray-200 cursor-pointer"
            >
              <RiLogoutBoxRLine className="text-2xl" />
              <span>Log out</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
