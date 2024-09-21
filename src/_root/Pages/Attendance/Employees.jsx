// import React, { useState } from "react";
// import { FaCalendarAlt, FaDownload, FaTable } from "react-icons/fa";

// const EmployeesList = () => {
//   const [activeTab, setActiveTab] = useState("table");

//   // Render the appropriate component based on the active tab
//   // const renderContent = () => {
//   //   switch (activeTab) {
//   //     case "table":
//   //       return (
//   //         <div className="col-span-4">
//   //           <AttendanceTable />
//   //         </div>
//   //       );
//   //     case "calendar":
//   //       return (
//   //         <div className="col-span-4">
//   //           <Calendar />
//   //         </div>
//   //       );
//   //     default:
//   //       return null;
//   //   }
//   // };
//   return (
//     <>
//       <div className="flex justify-between items-center">
//         <h1 className="text-xl font-semibold text-gray-700 ">
//           No Record Found
//         </h1>
//         <div className="flex justify-end items-center px-10 my-5 gap-2">
//           <button
//             onClick={() => setActiveTab("table")}
//             className={`p-2 ${
//               activeTab === "table" ? "border-b-2 border-pink-500" : ""
//             }`}
//           >
//             <FaTable className="h-6 w-6 text-black opacity-60" />
//           </button>
//           <button
//             onClick={() => setActiveTab("calendar")}
//             className={`p-2 ${
//               activeTab === "calendar" ? "border-b-2 border-pink-500" : ""
//             }`}
//           >
//             <FaCalendarAlt className="h-6 w-6 text-black opacity-60" />
//           </button>
//           <button onClick={() => alert("Downloading...")} className="p-2">
//             <FaDownload className="h-6 w-6 text-black opacity-60" />
//           </button>
//           <select
//             name="month"
//             id="month"
//             className="focus:border-pink-500 border-2 p-1 bg-transparent rounded-md border-gray-700 text-gray-500 text-[.8rem] font-semibold"
//           >
//             <option value="month">July</option>
//             <option value="month">August</option>
//             <option value="month">September</option>
//           </select>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmployeesList;

import React, { useState } from 'react';
import { FaTh, FaList, FaDownload } from 'react-icons/fa';
import EmployeeCard from '../../../Components/Employees/EmployeeCard';
import EmployeeTable from '../../../Components/Employees/EmployeeTable';



const EmployeesList = () => {
  const [view, setView] = useState('cards');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const employeesPerPage = 8;

  const handleDownload = () => {
    const data = JSON.stringify(employees, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employees.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <button onClick={() => setView('cards')} className="p-2">
            <FaTh className="h-6 w-6 text-black opacity-60" />
          </button>
          <button onClick={() => setView('list')} className="p-2">
            <FaList className="h-6 w-6 text-black opacity-60" />
          </button>
          <button onClick={handleDownload} className="p-2">
            <FaDownload className="h-6 w-6 text-black opacity-60" />
          </button>
        </div>
        <select
          name="month"
          id="month"
          className="focus:border-pink-500 border-2 p-1 bg-transparent rounded-md border-gray-700 text-gray-500 text-[.8rem] font-semibold"
        >
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search employees..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      {view === 'cards' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentEmployees.map(employee => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      )}
      {view === 'list' && <EmployeeTable employees={currentEmployees} />}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredEmployees.length / employeesPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-1 border rounded ${currentPage === index + 1 ? 'bg-pink-500 text-white' : 'bg-white text-black'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
