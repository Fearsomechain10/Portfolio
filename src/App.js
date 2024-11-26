import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Profiles from "./components/profiles/Profiles";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact";



function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Profiles />
        <Education />
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
