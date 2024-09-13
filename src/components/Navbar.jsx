import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-10 py-8 flex justify-between items-center'>
    <div className=" logo h-20 w-20 rounded-full "><img src="/images/logo.svg" alt="" /></div>
    <div className=" links flex gap-10 flex-wrap ">
        {["Services","Our Work","About us","Insights","contact"].map((item,index)=>(
            <a href='/' key={index} className={`captalize text-md font-semibold ${index === 4 && "ml-32"}`}>{item}</a>
        ))}
    </div>
    </div>
  )
}

export default Navbar