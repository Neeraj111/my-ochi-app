import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center px-4 md:px-28 gap-5 bg-zinc-50">
      <div className="cardContainer h-[40vh] md:h-[50vh] w-full md:w-1/2">
        <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
          <img className="w-32" src="/images/logo.svg" alt="Logo" />
          <button className="absolute text-sm left-5 font-semibold px-3 py-2 border-2 rounded-full bottom-5 text-white">
            &copy;2024
          </button>
        </div>
      </div>
      <div className="cardContainer h-[40vh] md:h-[50vh] w-full md:w-1/2 flex flex-col gap-5">
        <div className="card flex items-center justify-center relative rounded-xl w-full h-full bg-[#0b345b]">
          <img className="w-32" src="/images/logo.svg" alt="Logo" />
          <button className="absolute text-sm left-5 font-semibold px-3 py-2 border-2 rounded-full bottom-5 text-white">
            &copy;2024
          </button>
        </div>
        <div className="card flex justify-center items-center relative rounded-xl w-full h-full bg-[#0b345b]">
          <img className="w-32" src="/images/logo.svg" alt="Logo" />
          <button className="absolute text-sm left-5 font-semibold px-3 py-2 border-2 rounded-full bottom-5 text-white">
            &copy;2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
