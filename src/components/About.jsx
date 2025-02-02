import React from "react";

function About() {
  return (
    <div className="w-full p-5 md:p-20 text-black bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-2xl font-semibold px-3 tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        ducimus. Ipsum ex incidunt omnis, at atque eius vero beatae minima!
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] mt-10 border-green-400 pt-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl">Our Approach</h1>
          <button className="flex items-center gap-2 text-xs px-5 py-4 mt-10 rounded-full text-white bg-zinc-700 hover:bg-zinc-600">
            Read More
            <div className="mt-1 w-2 h-2 bg-zinc-300 rounded-full" />
          </button>
        </div>
        <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] bg-center bg-cover rounded-3xl bg-[url('https://media.gettyimages.com/id/1000652258/photo/male-caucasian-from-side.jpg?s=612x612&w=0&k=20&c=I8RniL42_fJdFWiuksw_enxNsc9h0-rLifPeRqqLNJU=')]"></div>
      </div>
    </div>
  );
}

export default About;

