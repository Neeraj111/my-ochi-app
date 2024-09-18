import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 h-auto md:h-screen bg-zinc-300 p-5 md:p-20">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[10vw] md:text-[7vw] font-semibold uppercase leading-none mb-0">
            Eye-
          </h1>
          <h1 className="text-[10vw] md:text-[7vw] font-semibold uppercase leading-none mb-0">
            Opening
          </h1>
        </div>
        <div className="h-[15vh] w-[15vh] flex justify-center items-center">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <h1 className="text-[10vw] md:text-[7vw] font-semibold uppercase leading-none mb-0">
          Presentations
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
          {["Instagram", "Facebook", "Twitter"].map((item, index) => {
            return (
              <a key={index} className="text-xl font-light px-4 py-2 hover:text-blue-500" href="#">
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
