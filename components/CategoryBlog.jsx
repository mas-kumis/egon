import React from "react";
import { IoBusiness } from "react-icons/io5";
import { FaRocket } from "react-icons/fa";
import { LuSignalHigh } from "react-icons/lu";
import { FaRobot } from "react-icons/fa6";
import Image from "next/image";
const CategoryBlog = () => {
  return (
    <div className="my-[70px] px-[100px]">
      <h4 className="font-bold text-[36px]">All Category</h4>
      <div className="flex flex-col items-center space-y-[40px] mt-[40px]">
        <div className="flex space-x-[20px] w-full items-center justify-center">
          <div className="bg-white hover:bg-secondary flex flex-col space-y-[10px] border border-slate-200 px-[20px] py-[20px]">
            <div className="w-[48px] h-[48px] bg-[#FBF6EA] flex items-center justify-center rounded-lg">
              {/* <Image src="/icon-business.png" width={48} height={48} alt="" /> */}
            </div>
            <h3 className="font-bold text-[28px]">Business</h3>
            <p className="text-mediumgrey">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="bg-white hover:bg-secondary flex flex-col space-y-[10px] border border-slate-200 px-[20px] py-[20px]">
            <div className="w-[48px] h-[48px] bg-[#FBF6EA] flex items-center justify-center rounded-lg">
              <FaRocket />
            </div>
            <h3 className="font-bold text-[28px]">StartUp</h3>
            <p className="text-mediumgrey">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="bg-white hover:bg-secondary flex flex-col space-y-[10px] border border-slate-200 px-[20px] py-[20px]">
            <div className="w-[48px] h-[48px] bg-[#FBF6EA] flex items-center justify-center rounded-lg">
              <LuSignalHigh />
            </div>
            <h3 className="font-bold text-[28px]">Economy</h3>
            <p className="text-mediumgrey">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="bg-white hover:bg-secondary flex flex-col space-y-[10px] border border-slate-200 px-[20px] py-[20px]">
            <div className="w-[48px] h-[48px] bg-[#FBF6EA] flex items-center justify-center rounded-lg">
              <FaRobot />
            </div>
            <h3 className="font-bold text-[28px]">Technology</h3>
            <p className="text-mediumgrey">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBlog;
