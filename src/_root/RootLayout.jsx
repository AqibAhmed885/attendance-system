import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Header/Navbar";
import Sidebar from "../Components/SideBar/SideBar";
import { FaBars } from "react-icons/fa";
import ModelSideBar from "../Components/SideBar/ModelSideBar";

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dummy function to check if user is authenticated
  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken"); // Example: Check for token in localStorage
  };

  // Redirect to login if not authenticated
  if (!isAuthenticated()) {
    return <Navigate to="/" />; // Redirect to login form
  }

  return (
    <div
      // style={{
      //   backgroundColor: "transparent",
      //   backgroundImage:
      //     "url(https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center center",
      //   backgroundAttachment: "fixed",
      //   backgroundBlendMode: "overlay",
      // }}
      className="flex h-screen "
    >
      {isSidebarOpen && <Sidebar />}
      <div className="flex flex-col flex-1">
        <header className="text-gray-700 p-4 flex justify-between">
          <button
            onClick={toggleSidebar}
            className="hidden lg:block"
          >
            <FaBars />
          </button>
          <div className="block lg:hidden">
            <ModelSideBar />
          </div>
          <Navbar />
        </header>

        <main className="p-4 overflow-auto rounded-tl-lg bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
