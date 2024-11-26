import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../../assets/index";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-10 pb-24 "
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Projects" />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectsCard
          title="BlogApp"
          des="A custom-developed BlogApp that enables seamless blog creation, publishing, and management with user-friendly interfaces."
          src={projectOne}
          icon1={
            <a
              href="https://github.com/Fearsomechain10/BlogApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <BsGithub />
              </span>
            </a>
          }
          icon2={
            <a
              href="https://github.com/Fearsomechain10/BlogApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGlobe />
              </span>
            </a>
          }
        />
        <ProjectsCard
          title="Digicash"
          des="A cryptocurrency tracking app offering real-time updates, portfolio management, and personalized market analysis tailored to users' needs."
          src={projectTwo}
          icon1={
            <a
              href="https://github.com/Fearsomechain10/DigiCash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <BsGithub />
              </span>
            </a>
          }
          icon2={
            <a
              href="https://digi-cash-arunava-sarkars-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGlobe />
              </span>
            </a>
          }
        />
        <ProjectsCard
          title="SkyCast"
          des="A weather app providing accurate forecasts, real-time alerts, and user-friendly features for personalized weather tracking and updates."
          src={projectThree}
          icon1={
            <a
              href="https://github.com/Fearsomechain10/Weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <BsGithub />
              </span>
            </a>
          }
          icon2={
            <a
              href="https://github.com/Fearsomechain10/Weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGlobe />
              </span>
            </a>
          }
        />
      </div>
    </section>
  );
};

export default Projects;
