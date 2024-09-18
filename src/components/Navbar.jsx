import React from 'react';

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-4 md:px-10 py-6 md:py-8 flex justify-between items-center bg-white shadow">
      <div className="logo h-20 w-20 rounded-full overflow-hidden">
        <img src="/images/logo.svg" alt="Logo" className="object-cover h-full w-full" />
      </div>
      <div className="links flex gap-6 md:gap-10 flex-wrap">
        {["Services", "Our Work", "About us", "Insights", "Contact"].map((item, index) => (
          <a
            href="/"
            key={index}
            className={`capitalize text-sm md:text-md font-semibold transition-colors duration-300 hover:text-blue-500 ${index === 4 && "ml-0 md:ml-32"}`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
