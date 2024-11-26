import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

const Profiles = () => {
  
  return (
    <section
      id="profiles"
      className="w-full py-10 pb-28 "
    >
      <Title title="Social" des="Profiles" />
      <div className="grid grid-cols-2 gap-10 px-56">
        <a
          href="https://leetcode.com/u/Arunava_01/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            title="LeetCode"
            des="Check out my LeetCode profile, where I make an effort to code consistently."
            icon={<SiLeetcode />}
          />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/sarkararunava00/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            title="GeeksforGeeks"
            des="I began coding with GeeksForGeeks. Check out my GFG profile for a brief glance."
            icon={<SiGeeksforgeeks />}
          />
        </a>
        <a
          href="https://github.com/Fearsomechain10"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Card
          title="GitHub"
          des="My GitHub profile has all my projects. Check it for more details."
          icon={<SiGithub />}
        />
        </a>
        <a
          href="https://www.linkedin.com/in/arunava2510/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Card
          title="LinkedIn"
          des="I share my daily posts here, helpful for Computer Science enthusiasts."
          icon={<SiLinkedin />}
        />
        </a>
      </div>
    </section>
  );
};

export default Profiles;


