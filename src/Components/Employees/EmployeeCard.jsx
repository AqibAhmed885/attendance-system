import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBuilding, FaClock } from 'react-icons/fa';

const EmployeeCard = ({ employee }) => {
  return (
    <Link to={`/employee/${employee.id}`} className="block">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={employee.image}
            alt={employee.name}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg">{employee.position}</p>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{employee.name}</h2>
          <p className="text-gray-600 flex items-center">
            <FaBuilding className="mr-2" /> {employee.department}
          </p>
          <p className="text-gray-600 flex items-center">
            <FaClock className="mr-2" /> {employee.timeIn} - {employee.timeOut}
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${employee.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {employee.active ? 'Active' : 'Inactive'}
            </span>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    timeIn: PropTypes.string.isRequired,
    timeOut: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
};

export default EmployeeCard;