import React from "react";
import Title from "../layouts/Title";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      id="education"
      className="w-full py-10 pb-28 "
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y:75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div>
          <Title title="Education" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="main-timeline">
                <div class="timeline">
                  <div class="timeline-content">
                    <span class="timeline-year">2017</span>
                    <div class="content">
                      <h3 class="title">Secondary X</h3>
                      <p class="description">
                        Completed the Secondary examination from Jangipur High
                        School under West Bengal Board of Secondary Education
                        (WBBSE) in 2017, achieving 78% marks, reflecting my
                        consistent effort & dedication.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-content">
                    <span class="timeline-year">2019</span>
                    <div class="content">
                      <h3 class="title">Higher Secondary XII</h3>
                      <p class="description">
                        Completed Higher Secondary in Science from Krishnath
                        College School with 80% marks under West Bengal Council
                        of Higher Secondary Education (WBCHSE).
                      </p>
                    </div>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-content">
                    <span class="timeline-year">2024</span>
                    <div class="content">
                      <h3 class="title">Bachelor of Technology</h3>
                      <p class="description">
                        Graduated with a B.Tech (2020-2024) in Computer Science
                        and Engineering, achieving a CGPA of 9.25 from
                        Government College of Engineering and Textile
                        Technology, Berhampore, reflecting strong technical
                        proficiency and academic excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

{
  /* <div class="h-[350px] w-full flex justify-center items-center">
        <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
          <div class="col-span-4 w-full h-full flex justify-end">
            <div class="w-fit h-full rounded-md p-3 border border-solid">
              <h1 class="text-white text-xl font-titleFont font-bold">
                Secondary X, 2017
              </h1>
              <p class="text-gray-100 sm:text-sm text-xs">
                Jangipur High School, WBBSE
              </p>
              <p class="text-gray-100 sm:text-sm text-xs">Percentage: 78%</p>
            </div>
          </div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-white bg-opacity-60"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black border border-solid z-10 text-white text-center">
              1
            </div>
          </div>
          <div class="col-span-4 w-full h-full"></div>

          <div class="col-span-4 w-full h-full"></div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-white bg-opacity-60"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black border border-solid z-10 text-white text-center">
              2
            </div>
          </div>
          <div class="col-span-4 w-full h-full ">
            <div class="w-fit h-full rounded-md p-3 border border-solid">
              <h1 class="text-white text-xl font-titleFont font-bold">
                Senior Secondary XII, Science (2017-2019)
              </h1>
              <p class="text-gray-100 sm:text-sm text-xs">
                Krishnath College School, WBCHSE
              </p>
              <p class="text-gray-100 sm:text-sm text-xs">Percentage: 80%</p>
            </div>
          </div>

          <div class="col-span-4 w-full h-full flex justify-end">
            <div class="w-fit h-full rounded-md p-3 border border-solid">
              <h1 class="text-white text-xl font-titleFont font-bold ">
                B.Tech, Computer Science (2020-2024)
              </h1>
              <p class="text-gray-100 sm:text-sm text-xs">
                Government College of Engineering and Textile 
              </p>
              <p class="text-gray-100 text-sm sm:text-sm">Technology,
              Berhampore</p>
              <p class="text-gray-100 sm:text-sm text-xs">CGPA: 9.25</p>
            </div>
          </div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-white bg-opacity-60"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black border border-solid z-10 text-white text-center">
              3
            </div>
          </div>
          <div class="col-span-4 w-full h-full"></div>
        </div>
      </div> */
}
