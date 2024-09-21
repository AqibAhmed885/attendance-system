import React from "react";
import { FiSearch, FiBell, FiSettings } from "react-icons/fi";
import ProfileDropdown from "./ProfileDropDown/ProfileDropDown";

const Navbar = () => {
  return (
    <div className="flex gap-4 items-center text-gray-700 ">
      <div className="hidden md:block">
        {/* <FiSearch className="text-sm" /> */}
        <input
          type="text"
          placeholder="Search Leads"
          className="text-gray px-4 py-1 rounded-sm shadow-sm shadow-gray-500 focus:outline-transparent"
        />
      </div>

      <ProfileDropdown />
    </div>
  );
};

export default Navbar;
