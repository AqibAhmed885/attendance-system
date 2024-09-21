import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';

const EmployeeTableRow = ({ employee, className }) => {
  return (
    <tr className={`border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200 ${className}`}>
      <td className="py-3 px-4">{employee.name}</td>
      <td className="py-3 px-4">{employee.position}</td>
      <td className="py-3 px-4">{employee.department}</td>
      <td className="py-3 px-4">{employee.timeIn}</td>
      <td className="py-3 px-4">{employee.timeOut}</td>
      <td className="py-3 px-4">{employee.date}</td>
      <td className="py-3 px-4">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${employee.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {employee.active ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td className="py-3 px-4">{employee.role}</td>
      <td className="py-3 px-4">
        <button className="text-pink-500 hover:text-pink-700 transition-colors duration-200">
          <FaEdit className="inline-block mr-1" /> 
        </button>
      </td>
    </tr>
  );
};

EmployeeTableRow.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    timeIn: PropTypes.string.isRequired,
    timeOut: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default EmployeeTableRow;