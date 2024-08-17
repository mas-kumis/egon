import React from "react";

const Contact = () => {
  return (
    <div className="px-[100px] py-[100px] flex flex-col items-center justify-center space-y-[20px]">
      <p className="text-primary uppercase ">Countact Us</p>
      <h1 className="text-[48px] font-bold text-primary">
        Lets Start A Conversation
      </h1>
      <p className="text-mediumgrey text-center w-[768px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
      <div className="flex flex-col w-[768px] ">
        <div className="bg-purple w-full grid grid-cols-2 px-[60px] py-[60px] my-[40px] text-white">
          <div className="flex flex-col space-y-[20px]">
            <p className="text-thin text-[14px] text-slate-300">
              Working Hours
            </p>
            <div>
              <h5 className="font-bkac text-[20px]">Monday To Friday</h5>
              <h5 className="font-bold text-[20px]">9:00 AM to 8:00 PM </h5>
            </div>

            <p className="text-[16px] text-slate-300 ">
              Our Support Team is available 24/7
            </p>
          </div>
          <div className="flex flex-col space-y-[20px]">
            <p className="text-thin text-[14px] text-slate-300">Contact Us</p>
            <div>
              <h5 className="font-bkac text-[20px]">020 7993 2905</h5>
            </div>

            <p className="text-[16px] text-slate-300">hello@finsweet.com</p>
          </div>
        </div>
        <form className="flex flex-col space-y-[20px]">
          <input
            type="text"
            className="w-full px-[20px] py-[20px] border border-slate-500 text-black focus:outline-none"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="w-full px-[20px] py-[20px] border border-slate-500 text-black focus:outline-none"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="w-full px-[20px] py-[20px] border border-slate-500 text-black focus:outline-none"
            placeholder="Query Related  "
          />
          <textarea
            type="text"
            className="w-full px-[20px] py-[20px] h-[144px] border border-slate-500 text-black focus:outline-none"
            placeholder="Message"
          />
          <button className="bg-secondary py-[20px] text-primary font-bold text-[32px]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
