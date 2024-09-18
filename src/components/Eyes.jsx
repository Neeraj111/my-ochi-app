import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Angle in degrees
      setRotate(angle + 90); // Adjust for the visual representation
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.3"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1359724893/photo/abstract-geometric-black-red-yellow-green-color-background-curves-shapes-and-lines.jpg?s=612x612&w=0&k=20&c=35OcE3ATZOJBC1A-bPgC4qjKY4URULQFqNLWQWp7qPw=')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-50">
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center">
                <div
                  style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 w-full"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
