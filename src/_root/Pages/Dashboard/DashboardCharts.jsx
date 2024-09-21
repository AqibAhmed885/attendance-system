import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";

const DashboardCharts = () => {
  const donutData = {
    labels: ["Achieved", "Remaining"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#ff1493", "#333"],
        hoverBackgroundColor: ["#ff1493", "#333"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["Trillionaire"],
    datasets: [
      {
        label: "Closed Projects",
        data: [1],
        backgroundColor: "#ff1493",
        borderWidth: 0,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
      <div className="col-span-2 md:col-span-1 bg-white  rounded-sm shadow-sm p-2 items-center justify-center ">
        <h2 className="text-black font-bold px-4 py-2">Target</h2>

        <Doughnut data={donutData} height={200} />
      </div>

      <div className=" col-span-2 md:col-span-1 bg-white p-2 rounded-sm shadow-sm   ">
        <h2 className="text-black font-bold px-4 py-2">Project</h2>

        <Bar data={barData} options={barOptions} height={300} />
      </div>
    </div>
  );
};

export default DashboardCharts;
