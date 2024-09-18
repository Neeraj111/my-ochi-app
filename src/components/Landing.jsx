import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen pt-2">
      <div className="textStructure mt-24 md:mt-52 px-4 md:px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker mb-4" key={index}>
              <div className="flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6rem" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mt-4 rounded-md h-[3.2rem] bg-red-500"
                  ></motion.div>
                )}

                <h1 className="text-5xl md:text-7xl uppercase -leading-[4vw] tracking-tighter font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t border-zinc-300 mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none" key={index}>
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-3 md:gap-5 mt-4 md:mt-0">
          <div className="px-5 py-2 border-[2px] font-light text-md border-zinc-300 rounded-full uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-300 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
