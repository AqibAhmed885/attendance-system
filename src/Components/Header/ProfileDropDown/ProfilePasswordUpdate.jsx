import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const ProfilePasswordUpdate = () => {
  return (
    <div className="min-h-screen bg-black  rounded-md p-4">
      <h2 className="text-white flex items-center gap-1  text-[1rem] font-semibold pb-4">
        {" "}
        <GoDotFill />
        <h1>Change Password</h1>
      </h2>

      <div className=" w-full bg-[#1C1C1C] rounded-lg shadow-lg p-3 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Profile Information */}
          <div className="col-span-2 rounded-lg space-y-3 p-2">
            <div className="flex flex-col items-center ">
              <img
                src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg" // Replace with actual profile image URL
                alt="Profile"
                className="rounded-full w-16 h-16 "
              />
              <h3 className="text-white text-xl font-semibold">Faisal Khan</h3>
              <p className="text-gray-400">Web Developer</p>
            </div>
            <div className="flex flex-col items-center text-white text-sm">
              <div className="flex items-center ">
                <FaEnvelope className="mr-2" />
                <span>Email Address</span>
              </div>
              <p className="text-gray-400">nada.amin@hikalproperties.ae</p>
            </div>
            <div className="flex flex-col items-center text-white text-sm ">
              <p>
                Status: <span className="text-green-400">Active</span>
              </p>
            </div>
            <div className="flex flex-col items-center text-white text-sm">
              <p>Profile Created on:</p>
              <p className="text-gray-400">2022-10-03 15:21:41</p>
            </div>
          </div>

          {/* Password Update Form */}
          <div className="col-span-3 bg-[#1C1C1C] p-2 rounded-lg">
            <form>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="oldPassword"
                >
                  Old Password *
                </label>
                <input
                  type="password"
                  id="oldPassword"
                  placeholder="Enter your old password"
                  className="w-full p-3 rounded bg-transparent text-white border border-white shadow-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    className="block text-white text-sm font-semibold mb-2"
                    htmlFor="newPassword"
                  >
                    New Password *
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="Enter your new password"
                    className="w-full p-3 rounded bg-transparent text-white border border-white shadow-lg"
                  />
                </div>
                <div>
                  <label
                    className="block text-white text-sm font-semibold mb-2"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your new password"
                    className="w-full p-3 rounded bg-transparent text-white border border-white shadow-lg"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold text-sm"
              >
                UPDATE PASSWORD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePasswordUpdate;
