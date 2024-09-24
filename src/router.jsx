import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/Pages/Dashboard/Dashboard";
import UserProfile from "./Components/UserProfile/UserProfile";
import OfficeSettings from "./_root/Pages/Attendance/OfficeSettings";
import MarkAttendance from "./_root/Pages/Attendance/MarkAttendance";
import AttendanceDashboard from "./_root/Pages/Attendance/AttendanceDashboard";
import EmployeesList from "./_root/Pages/Attendance/Employees";
import ProfilePasswordUpdate from "./Components/Header/ProfileDropDown/ProfilePasswordUpdate";
import LoginForm from "./Components/Forms/LoginForm";
import SignUpForm from "./Components/Forms/SignUpForm";
import EmployeeProfile from "./Components/Employees/EmployeeProfile";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />, // Public route for login
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  { path: "/profilepassword", element: <ProfilePasswordUpdate /> },
  { path: "/mark-attendance", element: <MarkAttendance /> },
  { path: "/emp-profile", element: <EmployeeProfile /> },

  {
    path: "/",

    element: <RootLayout />,
    // Protected routes behind RootLayout
    children: [
      { path: "/dashboard", element: <Dashboard /> }, // Redirects here after login
      { path: "/office-setting", element: <OfficeSettings /> },
      { path: "/attendance", element: <AttendanceDashboard /> },
      { path: "employees", element: <EmployeesList />, 
        children:[
          {path: ":id", element: <EmployeeProfile />},
        ]
      },
      { path: "/profile", element: <UserProfile /> },
    ],
  },
]);

export default router;
