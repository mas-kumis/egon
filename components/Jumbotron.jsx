import React from "react";

const Jumbotron = () => {
  return (
    <header className='w-screen h-screen bg-[url("/hero.png")] bg-center bg-cover'>
      <div className="flex flex-col justify-center px-[20px] lg:px-[100px] h-full lg:py-[40px] lg:w-[1000px] lg:space-y-[30px] space-y-[20px]">
        <p className="uppercase text-[16px] text-white">Posted on startup</p>
        <h1 className=" text-[56px] font-bold text-white leading-[50px]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p className="font-thin text-white text-[16px]">
          By <span className="text-secondary">James West</span> | May 23, 2022
        </p>
        <p className="text-white text-[16px] font-thin">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <button className="bg-secondary w-[200px] h-[60px] text-black font-semibold hover:bg-[#EDC14A] cursor-pointer text-[18px]">
          Read More..
        </button>
      </div>
    </header>
  );
};

export default Jumbotron;
