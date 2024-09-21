import React from "react";
import ReviewCard from "../../../Components/Cards/DashboardCard/ReviewCard";
import DealRevenue from "../../../Components/Cards/DashboardCard/DealRevenue";
import DashboardCharts from "./DashboardCharts";

const OverView = () => {
  return (
    <>
      <div className="flex items-center space-x-1 px-2 py-2">
        <h2 className="text-gray-700 px-2 py-1 text-xl font-bold">OVERVIEW</h2>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-4  ">
        <div className="col-span-2 md:col-span-1">
          <div className="grid grid-cols-4 md:grid-cols-3  gap-4">
            <div className="col-span-2 md:col-span-1">
              <ReviewCard title={"Fresh Lead"} Count={89} />
            </div>
            <div className="col-span-2 md:col-span-1">
              <ReviewCard title={"Close Deal"} Count={2} />
            </div>
            <div className="col-span-2 md:col-span-1">
              <ReviewCard title={"Meeting"} Count={34} />
            </div>
            <div className="col-span-2 md:col-span-1">
              <ReviewCard title={"Follow Up"} Count={6} />
            </div>
            <div className="col-span-2 md:col-span-1">
              <ReviewCard title={"New Leads"} Count={34} />
            </div>
            {/* <div className="col-span-4 md:col-span-3 ">
              <DealRevenue title={"Deal drawn in the month"} count={0} />
            </div> */}
          </div>
        </div>

        <DashboardCharts />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <div className=" ">
          <DealRevenue title={"Deal drawn in the month"} count={0} />
        </div>
        <div className=" ">
          <DealRevenue title={"All time revenue"} count={"4.01M"} />
        </div>
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h1 className="text-[.9rem] font-bold">UPCOMING MEETINGS</h1>
        <div>
          <button className="px-3 py-2 rounded-md bg-[#C1D3DA] hover:translate-y-1.2 text-sm">
            Nothing to show!
          </button>
        </div>
      </div>
    </>
  );
};

export default OverView;
