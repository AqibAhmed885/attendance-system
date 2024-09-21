import React from "react";

const ReviewCard = ({ title, Count }) => {
  return (
    <div className="bg-white md:mx-0 h-28 md:h-32 flex flex-col gap-2 justify-center items-center  shadow-sx rounded-md">
      <h1 className=" text-[1.2rem] font-semibold ">{Count}</h1>
      <p className=" text-[1rem] text-gray-700">{title} </p>
    </div>
  );
};

export default ReviewCard;
