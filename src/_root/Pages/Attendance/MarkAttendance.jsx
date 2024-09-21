import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MarkAttendance() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckIn = () => {
    toast.success("Now, Your Checked In");
  };

  const handleCheckOut = () => {
    toast.success("Now, Your Checked Out");
  };
  return (
    <div
      className="h-screen flex items-center bg-gray-200 justify-center bg-cover gap-4"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/614716f50b4f49202fdd0087/616949393cf90643c1403605_6423.png')",
      }}
    >
      <div className="bg-gradient-to-tl from-[#86B5C6] to-[#3E78B3] text-center text-gray-800 w-96 h-96 p-4 rounded-3xl">
        <div className="mb-4">
          <img
            src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
            alt="Logo"
            className="mx-auto h-20 border border-white shadow-transparent rounded-full w-20 object-cover"
          />
        </div>
        <h2 className="text-[1.2rem] font-semibold mb-2">Faisal Khan</h2>
        <div>
          <p className="text-[1rem] font-semibold">Check Time</p>
          <p className="text-[1rem] font-semibold font-mono">
            {time.toLocaleDateString("en-GB")}{" "}
            {time.toLocaleTimeString("en-GB")}
          </p>
        </div>
        <div className="flex flex-col  items-center text-[1rem] gap-2 mt-5">
          <button className="bg-[#0EF2D9] w-full text-white  py-1 rounded hover:bg-green-700 transition duration-300"
          onClick={handleCheckIn}>
            CHECK IN
          </button>
          <button className="bg-red-500 w-full text-white px-5 py-1 rounded hover:bg-red-700 transition duration-300"
          onClick={handleCheckOut}>
            CHECK OUT
          </button>
        </div>

      </div>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} closeOnClick pauseOnHover draggable />

    </div>
  );
}

export default MarkAttendance;
