import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate,setRotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX; 
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth/2
      let deltaY = mouseY - window.innerHeight/2
      var angle = Math.atan2(deltaX,deltaY) * (180/Math.PI);
      setRotate(270-angle)
      

    })
  })
  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-.6" className="relative w-full h-full bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1359724893/photo/abstract-geometric-black-red-yellow-green-color-background-curves-shapes-and-lines.jpg?s=612x612&w=0&k=20&c=35OcE3ATZOJBC1A-bPgC4qjKY4URULQFqNLWQWp7qPw=')]">
        <div className=" absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-50">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 w-full">
                <div className=" w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-50">
            <div className=" relative w-2/3 h-2/3 rounded-full flex justify-center items-center bg-zinc-900">
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 w-full">
                <div className=" w-10 h-10 rounded-full bg-zinc-100"></div>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
