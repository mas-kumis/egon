"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className=" bg-primary w-full py-[16px] lg:py-[10px] text-white px-[20px] md:px-[100px] sticky">
      <div className="flex justify-between items-center w-full h-full">
        <div className="text-xl font-bold">Egon Blog</div>
        <div className="text-md hidden lg:block">
          <ul className="flex justify-around  space-x-8 items-center">
            <li>Home</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li className="bg-white text-primary w-[150px] text-center py-2 font-bold">
              {" "}
              Subscribe
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <div>
            {open ? (
              <button onClick={() => setOpen(false)}>
                <GiHamburgerMenu className="text-white text-[24px]" />
              </button>
            ) : (
              <button onClick={() => setOpen(true)}>
                <IoCloseSharp className="text-white text-[24px]" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={`${open ? "hidden" : "block"} my-4 lg:hidden px-4`}>
        <ul className="flex flex-col space-y-4">
          <li>Home</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="bg-white text-primary w-[100px] text-center py-2 font-bold">
            Subscribe
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
