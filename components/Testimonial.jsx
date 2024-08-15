import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="px-[100px] my-[70px] w-screen">
      <div className="grid grid-cols-2  w-full bg-[#FBF6EA] px-[100px] pt-[100px] pb-[70px]">
        <div className="flex flex-col space-y-[20px] pr-[120px]">
          <h4 className="uppercase text-[16px]">Testimonial</h4>
          <h2 className="text-[36px] font-bold leading-[30px]">
            What people say about our blog
          </h2>
          <p className="text-16px text-mediumgrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="flex flex-col space-y-[110px] pl-[50px] w-full  border-l border-slate-400">
          <h4 className="font-bold text-[24px] leading-[20px] pr-[60px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center space-x-[20px] ">
              <div className="w-[48px] h-[48px] bg-slate-600 rounded-full"></div>
              <div className="flex flex-col">
                <p className="font-bold text-[24px]">Jonathan Vallem</p>
                <p className="text-mediumgrey text-[16px]">New york, USA</p>
              </div>
            </div>
            <div className="flex space-x-[20px]">
              <button className="bg-white hover:bg-primary text-primary  hover:text-white flex items-center justify-center h-[48px] w-[48px] rounded-full">
                <FaArrowLeft className="" />
              </button>
              <button className="bg-white hover:bg-primary text-primary  hover:text-white flex items-center justify-center h-[48px] w-[48px] rounded-full">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
