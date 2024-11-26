import React from "react";


const ProjectsCard = ({ title, des, src, icon1, icon2 }) => {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg flex flex-col bg-black shadow-shadowOne border border-gray-600 hover:border-cyan-500 hover:bg-opacity-40 hover:-translate-y-1 group transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-gray-800 inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer">
                {icon1}
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-gray-800 inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer">
                {icon2}
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
// hover:bg-gradient-to-b hover:from-[#000428] hover:to-[#003e74]
