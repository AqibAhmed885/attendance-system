const SideProfile = () => {
  return (
    <div className="p-2 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full px-2 flex flex-col items-center gap-4">
        {/* Profile Section */}
        <div className="bg-white shadow-sm shadow-gray-300 rounded-lg w-full py-4 flex flex-col items-center justify-center">
          <div className="flex justify-center items-center mb-2">
            <img
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
              className="h-20 w-20 object-cover p-1 rounded-full border-2 border-gray-300"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Faisal Khan</h2>
          <p className="text-gray-600 text-sm">Web Developer</p>
        </div>

        {/* Salary Section */}
        <div className="bg-white flex flex-col gap-4 shadow-sm shadow-gray-300 rounded-lg w-full p-4 items-center justify-center">
          <p className="text-sm text-gray-700 font-semibold flex justify-between w-full">
            <span>Monthly Salary:</span>
            <span className="font-bold bg-blue-100 rounded-full text-blue-600 px-2">Rs 50,000</span>
          </p>
          <p className="text-sm text-gray-700 font-semibold flex justify-between w-full">
            <span>Salary per Day:</span>
            <span className="font-bold bg-green-100 rounded-full text-green-600 px-2">Rs {Math.round(50000 / 30)}</span>
          </p>
        </div>

        {/* Attendance Section */}
        <div className="bg-white shadow-sm shadow-gray-300 rounded-lg w-full py-4 px-4 flex flex-col text-xs font-semibold gap-2">
          <div className="flex justify-between w-full text-gray-700">
            <p>Working Days</p>
            <div className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center">
              30
            </div>
          </div>
          <div className="flex justify-between w-full text-gray-700">
            <p>Attended Days</p>
            <div className="bg-green-100 text-green-700 rounded-full h-6 w-6 flex items-center justify-center">
              26
            </div>
          </div>
          <div className="flex justify-between w-full text-gray-700">
            <p>Leave Day</p>
            <div className="bg-red-100 text-red-700 rounded-full h-6 w-6 flex items-center justify-center">
              1
            </div>
          </div>
          <div className="flex justify-between w-full text-gray-700">
            <p>Extra Minutes</p>
            <div className="bg-yellow-100 text-yellow-700 rounded-full h-6 w-6 flex items-center justify-center">
              0
            </div>
          </div>
          <div className="flex justify-between w-full text-gray-700">
            <p>Late Attendance Days</p>
            <div className="bg-purple-100 text-purple-700 rounded-full h-6 w-6 flex items-center justify-center">
              0
            </div>
          </div>
        </div>


        {/* Total Salary Section */}
        <div className="flex flex-col bg-white gap-4 shadow-sm shadow-gray-300 rounded-lg w-full py-4 text-sm font-semibold">
          <p className="text-gray-700 flex flex-col items-center justify-center">
            Total Salary:
          </p>
          <span className="flex mx-auto font-bold bg-green-100 rounded-full justify-center text-green-700 px-2">Rs 50,000</span>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;