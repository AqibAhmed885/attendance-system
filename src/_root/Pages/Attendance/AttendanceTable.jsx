import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { MdCancel, MdModeEditOutline } from "react-icons/md";

const AttendanceTable = () => {
  const data = [
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },

    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },

    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
  ];
  // -----------------------------------Model----------------------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleConfirm = () => {
    // Handle confirmation logic
    closeModal();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {/* Main Content */}
      <div className="min-h-screen w-full bg-white rounded-lg  flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[1rem] font-semibold p-2 text-gray-700">
            Attendance Records
          </h3>
        </div>

        {/* Table */}
        <div className="overflow-auto scrollbar-custom  max-h-screen p-2 ">
          <table className="min-w-full border border-white">
            <thead>
              <tr>
                {[
                  "Date",
                  "In-time",
                  "In-source",
                  "Out-time",
                  "Out-source",
                  "Office time",
                  "Late",
                  "Extra",
                  "Note/Reason",
                  "Deducted",
                  "Action",
                ].map((header) => (
                  <th
                    key={header}
                    className="p-4 text-[.8rem] font-semibold bg-gray-300 text-gray-700 text-left whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((row, index) => (
                  <tr
                    key={index}
                    className="text-[.8rem] bg-white cursor-pointer hover:bg-[#F5F5F5] text-center text-nowrap"
                  >
                    <td className="p-4 border-t hover:border-pink-400 hover:border  border-gray-200">
                      {row.date}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t  border-gray-200">
                      {row.inTime}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.inSource}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.outTime}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.outSource}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.officeTime}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.late}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.extra}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.noteReason}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.deducted}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      <button
                        onClick={openModal}
                        className="text-pink-500 hover:text-pink-700 text-[1rem] font-semibold"
                      >
                        <MdModeEditOutline />
                      </button>
                    </td>
                    {/* ---------------Model--------------------------- */}
                    {isModalOpen && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
                        <div className="bg-white rounded-lg w-2/3 max-w-lg p-6 relative">
                          <button
                            className="absolute top-2 text-[1.5rem] font-semibold right-2 text-pink-600 hover:text-gray-800"
                            onClick={closeModal}
                          >
                            <MdCancel />
                          </button>
                          <div className="flex flex-col justify-center items-center">
                            <div className="text-pink-600 text-[3rem]">
                              <IoMdAlert />
                            </div>
                            <h2 className="ml-3 text-xl font-semibold">
                              Enter Late Reason
                            </h2>
                          </div>
                          <div className="mt-4">
                            <label className="block">
                              <input
                                type="text"
                                placeholder="Enter reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-pink-500 focus:border-pink-500"
                              />
                            </label>
                          </div>
                          <div className="flex justify-center mt-6">
                            <button
                              onClick={handleConfirm}
                              className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-700"
                            >
                              CONFIRM
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* -------------------------------------------------- */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="11"
                    className="py-4 text-center text-[.7rem] text-gray-500 border-t border-gray-200"
                  >
                    No rows
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center m-4">
        <button
            className="mx-2 p-1 text-[.8rem] bg-gray-200 rounded hover:bg-gray-300"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <FaLessThan />
          </button>
          <span className="text-sm pr-5">
            {startIndex + 1}-{startIndex + currentItems.length} of {data.length}
          </span>
          
          <button
            className="p-1 text-[.8rem] bg-gray-200 rounded hover:bg-gray-300"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </>
  );
};

export default AttendanceTable;
