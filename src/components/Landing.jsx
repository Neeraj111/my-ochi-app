import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {

    return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen pt-2 ">
      <div className="textStructure mt-52 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
                <div className="flex">
                {index==1 && (
                    <motion.div
                    initial={{width:0}}
                    animate={{width:"6rem"}}
                    transition={{ease:[0.76,0,0.24,1],duration:1}}
                    className=" mt-4 rounded-md h-[3.2rem] w-[6rem] bg-red-500"> </motion.div>
                )}

              <h1 className="text-7xl uppercase -leading-[4vw] tracking-tighter font-semibold">
                {item}
              </h1>

                </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-300 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and provate comapnies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
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
