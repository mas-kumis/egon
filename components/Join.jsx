import React from "react";

const Join = () => {
  return (
    <div className="flex w-screen items-center justify-center my-[100px] ">
      <div className="flex flex-col space-y-[20px] justify-center items-center w-[410px] text-center ">
        <h1 className="font-bold text-[36px]">
          Join our team to be a part of our story
        </h1>
        <p className="text-mediumgrey text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <button className="bg-secondary mt-[20px] text-primary w-[180px] py-[20px]">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Join;
