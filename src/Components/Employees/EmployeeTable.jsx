import PropTypes from 'prop-types';
import EmployeeTableRow from './EmployeeTableRow';

const EmployeeTable = ({ employees }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Name</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Position</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Department</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Time In</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Time Out</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Date</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Status</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Role</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Edit</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <EmployeeTableRow
              key={employee.id}
              employee={employee}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

EmployeeTable.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      timeIn: PropTypes.string.isRequired,
      timeOut: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeTable;