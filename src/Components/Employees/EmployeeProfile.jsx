
import PropTypes from 'prop-types';
import { FaUserTie, FaBuilding, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
const employees = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    position: 'Software Engineer',
    department: 'Engineering',
    timeIn: '09:00 AM',
    timeOut: '05:00 PM',
    date: '2023-10-01',
    active: true,
    role: 'Developer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  }
]
const EmployeeProfile = () => {
  // const { id } = useParams();
  // const employee = employees.find(emp => emp.id === parseInt(id));

  // if (!employee) {
  //   return <div>Employee not found</div>;
  // }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
      <div className="flex items-center justify-center p-6 bg-gray-100">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
          src={employees.image}
          alt={employees.name}
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{employees.name}</h2>
        <p className="text-gray-600 flex items-center mt-2">
          <FaUserTie className="mr-2" /> {employees.position}
        </p>
        <p className="text-gray-600 flex items-center mt-2">
          <FaBuilding className="mr-2" /> {employees.department}
        </p>
        <p className="text-gray-600 flex items-center mt-2">
          <FaClock className="mr-2" /> {employees.timeIn} - {employees.timeOut}
        </p>
        <p className="text-gray-600 flex items-center mt-2">
          <FaEnvelope className="mr-2" /> {employees.email}
        </p>
        <p className="text-gray-600 flex items-center mt-2">
          <FaPhone className="mr-2" /> {employees.phone}
        </p>
        <div className="mt-4">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${employees.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {employees.active ? 'Active' : 'Inactive'}
          </span>
        </div>
        <div className="mt-4">
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
            {employees.role}
          </span>
        </div>
      </div>
    </div>
  );
};

EmployeeProfile.propTypes = {
  id: PropTypes.number.isRequired,
};

export default EmployeeProfile;