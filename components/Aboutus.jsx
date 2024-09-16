import React from "react";

const Aboutus = () => {
  return (
    <div className="my-[40px] px-[100px] w-screen">
      <div className="grid grid-cols-5 w-full h-[20px]">
        <div className="bg-white w-full h-full"></div>
        <div className="bg-secondary w-full h-full"></div>
        <div className="bg-secondary w-full h-full"></div>
       <div className="bg-secondary w-full h-full"></div>
        // <div className="bg-purple w-full h-full"></div> 
      </div>
      <div className="flex py-[100px] bg-[#F4F0F8]  px-[70px] space-x-[40px]">
        <div className="basis-1/2 space-y-[20px] flex flex-col">
          <p className="text-[16px] uppercase">About Us</p>
          <h2 className="text-[36px] font-bold leading-[36px]">
            We are a community of content writers who share their learnings
          </h2>
          <p className="text-[16px] text-mediumgrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-purple font-bold">Read More</p>
        </div>
        <div className="basis-1/2 space-y-[20px] flex flex-col">
          <p className="text-[16px] uppercase">Our Mision</p>
          <h2 className="text-[28px] font-bold leading-[30px]">
            Creating valuable content for creatives all around the world
          </h2>
          <p className="text-[16px] text-mediumgrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
