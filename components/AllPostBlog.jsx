import React from "react";

const AllPostBlog = () => {
  return (
    <div className="w-screen px-[100px] my-[70px]">
      <div className="flex justify-between items-center mb-[50px]">
        <h2 className="font-bold text-[36px]">All Posts</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex space-x-[30px] items-center">
          <div className="min-w-[490px] max-w-[491px] h-[318px] bg-slate-500 "></div>
          <div className="flex flex-col space-y-[25px] w-[624px]">
            <p className="uppercase text-primary">STARTUP</p>
            <h5 className="text-[36px] font-bold ">
              Design tips for designers that cover everything you need
            </h5>
            <p className="text-mediumgrey">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end space-x-[20px] py-[20px]">
        <p className="font-bold text-mediumgrey hover:text-primary text-[24px]">
          Prev
        </p>
        <p className="font-bold text-mediumgrey hover:text-primary  text-[24px]">
          Next
        </p>
      </div>
    </div>
  );
};

export default AllPostBlog;
