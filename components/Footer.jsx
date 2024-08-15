import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-primary text-white w-creen px-[100px] py-[50px] flex flex-col space-y-[60px]">
      <div className="flex justify-between w-full">
        <h3 className="text-[24px] font-bold">Egon by Mas Kumis</h3>
        <div className="flex justify-around space-x-[20px]">
          <p>Home</p>
          <p>Blog</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="py-[80px] px-[60px] bg-[#41445f] grid grid-cols-2">
        <h2 className="font-bold text-[36px] leading-[34px]">
          Subscribe to our news letter to get latest updates and news
        </h2>
        <div className="flex justify-between">
          <div>
            <input
              type="text"
              placeholder="Place your email"
              className="px-[20px] h-[56px] w-[323px] bg-[#41445f] text-white border-2 border-slate-300 focus:outline-none "
            />
          </div>
          <button className="px-[40px] h-[56px] bg-secondary">Subscribe</button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="text-thin">Finstreet 118 2561 Fintown</p>
          <p className="text-thin">Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="flex justify-around space-x-[20px]">
          <MdFacebook className="text-[#41445f]" />
          <FaTwitter className="text-[#41445f]" />
          <FaInstagram className="text-[#41445f]" />
          <FaLinkedin className="text-[#41445f]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
