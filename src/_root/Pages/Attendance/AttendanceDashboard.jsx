import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaDownload,
  FaTable,
} from "react-icons/fa";
import AttendanceTable from "./AttendanceTable";
import Calendar from "./Calendar";
import SideProfile from "../../../Components/Employees/SideProfile";

const AttendanceDashboard = () => {
  const [activeTab, setActiveTab] = useState("table");

  // Render the appropriate component based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "table":
        return (
          <div className="w-full">
            <AttendanceTable />
          </div>
        );
      case "calendar":
        return (
          <div className="w-full">
            <Calendar />
          </div>
        );
      default:
        return null;
    }
  };

  // const data = [
  //   {
  //     date: "2024-07-01",
  //     inTime: "9:00",
  //     inSource: "LHD",
  //     outTime: "5:00",
  //     outSource: "LHD",
  //     officeTime: "9:00",
  //     late: "-",
  //     extra: "15",
  //     noteReason: "-",
  //     deducted: "-",
  //   },
  //   {
  //     date: "2024-07-01",
  //     inTime: "9:00",
  //     inSource: "LHD",
  //     outTime: "5:00",
  //     outSource: "LHD",
  //     officeTime: "9:00",
  //     late: "-",
  //     extra: "15",
  //     noteReason: "-",
  //     deducted: "-",
  //   },
  //   {
  //     date: "2024-07-01",
  //     inTime: "9:00",
  //     inSource: "LHD",
  //     outTime: "5:00",
  //     outSource: "LHD",
  //     officeTime: "9:00",
  //     late: "-",
  //     extra: "15",
  //     noteReason: "-",
  //     deducted: "-",
  //   },
  //   {
  //     date: "2024-07-01",
  //     inTime: "9:00",
  //     inSource: "LHD",
  //     outTime: "5:00",
  //     outSource: "LHD",
  //     officeTime: "9:00",
  //     late: "-",
  //     extra: "15",
  //     noteReason: "-",
  //     deducted: "-",
  //   },
  // ];
  // // -----------------------------------Model----------------------------
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [reason, setReason] = useState("");

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  // const handleConfirm = () => {
  //   // Handle confirmation logic
  //   closeModal();
  // };
  return (
    <>
      <div className="flex justify-end items-center text-gray-700 px-10 my-5 gap-2">
        <button
          onClick={() => setActiveTab("table")}
          className={`p-2  ${
            activeTab === "table" ? "border-b-2 border-pink-500" : ""
          }`}
        >
          <FaTable className="h-6 w-6  opacity-60" />
        </button>
        <button
          onClick={() => setActiveTab("calendar")}
          className={`p-2 ${
            activeTab === "calendar" ? "border-b-2 border-pink-500" : ""
          }`}
        >
          <FaCalendarAlt className="h-6 w-6  opacity-60" />
        </button>
        <button onClick={() => alert("Downloading...")} className="p-2">
          <FaDownload className="h-6 w-6  opacity-60" />
        </button>
        <select
          name="month"
          id="month"
          className="focus:border-pink-500 border-2 p-1 bg-transparent rounded-md border-gray-700 text-gray-500 text-[.8rem] font-semibold"
        >
          <option value="month">July</option>
          <option value="month">August</option>
          <option value="month">September</option>
        </select>
      </div>

      <div className="flex my-4 gap-2 p-2">
        {/* Sidebar */}

        <div className="w-1/4">
          {/* Sidebar Container */}
          {/* <div className="w-full  px-2 flex flex-col items-center gap-4">
            <div className="bg-white  rounded-lg w-full py-2 flex flex-col items-center justify-center">
              <div className="  flex justify-center items-center mb-1">
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="h-16 w-16  object-cover  p-1 rounded-full "
                />
              </div>
              <h2 className="text-[1.2rem] font-semibold">Faisal Khan</h2>
              <p className="text-gray-600 text-[0.8rem]">Web Developer</p>
            </div>

            <div className="bg-white  rounded-lg w-full py-3 flex flex-col items-center justify-center">
              <p className="text-[.7rem] flex flex-col items-center justify-center font-semibold">
                Monthly salary <span className="font-bold "> Rs - 3000</span>
              </p>
              <p className="text-[.7rem] flex flex-col items-center justify-center font-semibold">
                Salary per day <span className="font-bold"> Rs- 100</span>
              </p>
            </div>

            <div className="bg-white rounded-lg w-full py-3 px-3 flex flex-col text-[.7rem] font-semibold items-center justify-center gap-1 ">
              <p className="text-gray-700">31 Working days</p>
              <p className="text-gray-700">26 Attended days</p>
              <p className="text-gray-700">1 Leave days</p>
              <p className="text-gray-700">0 Extra minutes</p>
              <p className="text-gray-700">0 Late Attendance days</p>
            </div>

            <div className="bg-white rounded-lg w-full py-3 text-[.7rem] font-semibold">
              <p className="text-gray-700 flex flex-col items-center justify-center">
                Total salary <span className="font-bold"> Rs - 2900</span>
              </p>
            </div>
          </div> */}
          <SideProfile/>
        </div>

        {/* Content Area */}
        {renderContent()}
        
      </div>
    </>
  );
};

export default AttendanceDashboard;
