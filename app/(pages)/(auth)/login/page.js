import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-slate-100 px-[20px]">
      <div className="w-[400px] rounded-2xl shadow-lg flex flex-col items-center justify-center py-[40px] px-[40px] bg-white">
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full h-[50px] px-[20px] rounded-lg my-[20px] border border-slate-400 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Your Password"
          className="w-full h-[50px] px-[20px] rounded-lg my-[20px] border border-slate-400 focus:outline-none"
        />
        <button className=" cursor-pointer bg-secondary text-primary font-bold hover:bg-primary text-[20px] hover:text-white py-[10px] w-full rounded-lg my-[20px]">
          {" "}
          Login
        </button>
        <p className="text-[14px]">
          {" "}
          Dont have an account?
          <span className="cursor-pointer text-secondary hover:text-primary font-bold">
            <Link href="/register">Sign Up </Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
