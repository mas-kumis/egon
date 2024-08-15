import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ListAuthor = () => {
  return (
    <div className="my-[70px] px-[100px] flex items-center w-screen justify-center">
      <div className="flex flex-col items-center space-y-[40px] w-full">
        <h4 className="font-bold text-[36px]">List of Author</h4>
        <div className="flex space-x-[20px] justify-around w-full">
          <div className="bg-[#F4F4F4] hover:bg-[#FBF6EA] flex flex-col items-center justify-center space-y-[10px] border border-slate-200 px-[20px] py-[40px]">
            <div className="w-[128px] h-[128px] bg-[url('/author1.png')] rounded-full"></div>
            <h3 className="font-bold text-[28px]">FlodyMiles</h3>
            <p className="text-mediumgrey">Content Writer @Company</p>
            <div className="flex my-2 space-x-[10px] text-primary">
              <MdFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <div className="bg-[#F4F4F4] hover:bg-[#FBF6EA] flex flex-col items-center justify-center space-y-[10px] border border-slate-200 px-[20px] py-[40px]">
            <div className="w-[128px] h-[128px]  rounded-full bg-[url('/author2.png')] "></div>
            <h3 className="font-bold text-[28px]">FlodyMiles</h3>
            <p className="text-mediumgrey">Content Writer @Company</p>
            <div className="flex my-2 space-x-[10px] text-primary">
              <MdFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <div className="bg-[#F4F4F4] hover:bg-[#FBF6EA] flex flex-col items-center justify-center space-y-[10px] border border-slate-200 px-[20px] py-[40px]">
            <div className="w-[128px] h-[128px] bg-[url('/author3.png')] rounded-full"></div>
            <h3 className="font-bold text-[28px]">FlodyMiles</h3>
            <p className="text-mediumgrey">Content Writer @Company</p>
            <div className="flex my-2 space-x-[10px] text-primary">
              <MdFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <div className="bg-[#F4F4F4] hover:bg-[#FBF6EA] flex flex-col items-center justify-center space-y-[10px] border border-slate-200 px-[20px] py-[40px]">
            <div className="w-[128px] h-[128px] bg-[url('/author4.png')] rounded-full"></div>
            <h3 className="font-bold text-[28px]">FlodyMiles</h3>
            <p className="text-mediumgrey">Content Writer @Company</p>
            <div className="flex my-2 space-x-[10px] text-primary">
              <MdFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAuthor;
