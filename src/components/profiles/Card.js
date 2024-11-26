import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full gap-5 px-5 h-48 rounded-lg flex items-center bg-gradient-to-r from-[#101010] via-[#4d1515] to-[#421238] group hover:bg-gradient-to-r hover:from-[#120a0a] hover:via-[#4d1515] hover:to-[#6b1d5b] hover:-translate-y-1 transition-colors duration-100 cursor-pointer">
      <div className=" w-fit">
        <div className="translate-x-14 group-hover:translate-x-0 transition-transform duration-500">
          <span className="text-7xl">{icon}</span>
        </div>
      </div>
      <div className=" w-56">
        <div className="flex flex-col gap-3 font-titleFont translate-x-14 group-hover:translate-x-0 transition-transform duration-500">
          <h2 className="text-2xl font-titleFont font-bold ">{title}</h2>
          <p className="text-xs text-gray-300 flex ">{des}</p>
        </div>
      </div>
      <div className="w-fit overflow-x-hidden">
        <div className="translate-x-14 group-hover:translate-x-0 transition-transform duration-500">
          <span className="text-xl flex items-end">
            <FaArrowRightLong />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
//5c184e
