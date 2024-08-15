import React from "react";

const HeaderBlog = () => {
  return (
    <div className="w-screen py-[80px] px-[100px] grid grid-cols-2 bg-[#F4F0F8]">
      <div className="flex flex-col justify-between pr-[100px]">
        <p className="uppercase text-[16px]">Featured Post</p>
        <h1 className="font-bold text-[36px] leading-[32px]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p className="text-[14px]">By John Doe l May 23, 2022 </p>
        <p className="text-[14px] text-mediumgrey">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.{" "}
        </p>
        <button className="w-[200px] bg-secondary py-[20px] text-primary font-semibold">
          Read More
        </button>
      </div>
      <div className="bg-slate-400 pl-[50px] w-[515px] h-[359px]"></div>
    </div>
  );
};

export default HeaderBlog;
