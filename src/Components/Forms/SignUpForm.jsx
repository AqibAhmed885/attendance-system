import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    logo: null,
    employeeId: "",
    firstName: "",
    lastName: "",
    joiningDate: "",
    position: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogoChange = (e) => {
    setFormData({
      ...formData,
      logo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and form submission logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(formData);
    // Handle form submission (e.g., send data to the backend)
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
            placeholder="Enter first name"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
            placeholder="Enter last name"
          />
        </div>
        {/* Employee ID */}
        <div className="mb-4">
          <label className="block text-gray-700">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
            placeholder="Enter employee ID"
          />
        </div>
        {/* Joining Date */}
        <div className="mb-4">
          <label className="block text-gray-700">Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
          />
        </div>
        {/* Logo Upload */}
        <div className="mb-4">
          <label className="block text-gray-700">Logo</label>
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleLogoChange}
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
          />
        </div>
        {/* Position */}
        <div className="mb-4">
          <label className="block text-gray-700">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
            placeholder="Enter position"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
            placeholder="Enter password"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-pink-300"
            placeholder="Confirm password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
