import React from "react";
import Title from "../layouts/Title";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Skills = () => {
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
      id="skills"
      className="w-full py-10 pb-28 "
    >
      <div>
        <Title title="Skills" />
      </div>
      <div className="w-full flex gap-20">
        {/* left div */}
        <div className="w-1/2">
          <div className="font-titleFont">
            <h2 className="text-3xl font-bold flex justify-center">Frontend Skills</h2>
          </div>
          <div className="mt-14 w-full flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Html5</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">CSS3</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">90%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">JavaScript</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">ReactJs</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Tailwind CSS</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
        {/* Right div */}
        <div className="w-1/2">
          <div className="font-titleFont">
            <h2 className="text-3xl font-bold flex justify-center">Backend Skills</h2>
          </div>
          <div className="mt-14 w-full flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Nodejs</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Expressjs</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Mongodb</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Restapi</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">mysql</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  variants={{
                    hidden: { x: "-100%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
