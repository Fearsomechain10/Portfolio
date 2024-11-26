import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDiscord, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiExpress } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Full Stack Developer.", "UI/UX Designer.", "Software Engineer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className="w-1/2 flex flex-col gap-20">
    <div className="flex flex-col gap-5">
      <h4 className="text-lg font-normal">Empowering Ideas Through Code</h4>
      <h1 className="text-6xl font-bold text-white">
        {" "}
        Hi, I'm{" "}
        <span className="text-designColor capitalize">Arunava Sarkar</span>
      </h1>
      <h2 className="text-4xl font-bold text-white">
        a <span>{text}</span>
        <Cursor
          cursorBlinking="false"
          cursorStyle="|"
          cursorColor="#ff014f"
        />
      </h2>
      <p className="text-base font-bodyfont leading-6 tracking-wide">
        An enthusiastic Full Stack developer with a sharp design sense and
        expertise in JavaScript and ReactJS. With strong skills in MERN
        technologies, I deliver dynamic, scalable & reliable web
        applications through innovation and rigorous testing.
      </p>
    </div>
    <div className="flex justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/arunava2510/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://x.com/ar__dx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaXTwitter />
            </span>
          </a>
          <a
            href="https://x.com/ar__dx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaDiscord />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Best Skill on
        </h2>
        <div className="flex gap-4">
        <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaReact />
            </span>
          </a>
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiExpress />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeftBanner