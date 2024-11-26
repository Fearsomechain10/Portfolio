import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";


const Banner = () => {

  return (
    <section
      id="home"
      className="w-full pt-10 pb-28 flex items-center font-titleFont "
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
