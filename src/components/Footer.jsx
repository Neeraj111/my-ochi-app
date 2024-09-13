import React from "react";

function Footer() {
  return (
    <div className="w-full flex gap-5 h-screen bg-zinc-300 p-20">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading ">
          <h1 className="text-[7vw] font-semibold uppercase leading-none -mb-15">
            Eye-
          </h1>
          <h1 className="text-[7vw] font-semibold uppercase leading-none -mb-15">
            Opening
          </h1>
        </div>
        <h1 className="h-[15vh] w-[15vh] ">
          <img src="/images/logo.svg" alt="" />
        </h1>
      </div>
      <div className="w-1/2">
        <h1 className="text-[7vw] font-semibold uppercase leading-none -mb-15">
          presentations
        </h1>
        <div className="dets flex  flex-wrap justify-center items-center gap-2 mt-10 ">
                {["Instagram","Facebook","Twitter"].map((item,index)=>{
                    return <a className=" text-xl font-light px-10" href="#">{item}</a>
                })}
            </div>
      </div>
    </div>
  );
}

export default Footer;
