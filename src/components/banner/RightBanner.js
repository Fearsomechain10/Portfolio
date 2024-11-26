import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
      <img
        className="w-[700px] h-[600px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[485px] h-[450px] bg-gradient-to-r from-[#171717] via-[#4d1515] to-[#421238] shadow-shadowOn flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
