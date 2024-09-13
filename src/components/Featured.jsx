import { motion, useAnimate, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHoverStart = (index) => {
    cards[index].start({ y: "0%" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div  className="w-full py-20 bg-zinc-400">
      <div className="w-full px-20 border-b-2 pb-20 border-zinc-500">
        <h1 className="text-6xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="cards w-full flex gap-10 mt-2 px-20 py-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="relative card-container w-1/2 h-[80vh]  rounded-xl"
        >
          <h1 className="absolute left-full flex overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl font-semibold leading-none tracking-tighter text-[#edb807]">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl  overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="/images/card2.jpg"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="relative card-container w-1/2 h-[80vh]  rounded-xl"
        >
          <h1 className="absolute left-0 flex overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-7xl font-semibold leading-none tracking-tighter text-[#edb807]">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl  overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="/images/Card.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
