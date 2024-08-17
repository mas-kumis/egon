import Link from "next/link";
import React from "react";
import { register } from "@/action/user";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-slate-100 px-[20px]">
      <form
        action={register}
        className="w-[400px] rounded-2xl shadow-lg flex flex-col items-center justify-center py-[40px] px-[40px] bg-white"
      >
        <h1 className="text-2xl font-bold">Register</h1>
        <input
          type="text"
          placeholder="Your Username"
          name="username"
          className="w-full h-[50px] px-[20px] rounded-lg my-[10px] border border-slate-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          className="w-full h-[50px] px-[20px] rounded-lg my-[10px] border border-slate-400 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Your Password"
          className="w-full h-[50px] px-[20px] rounded-lg my-[10px] border border-slate-400 focus:outline-none"
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full h-[50px] px-[20px] rounded-lg my-[10px] border border-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          className=" bg-secondary text-primary font-bold hover:bg-primary text-[20px] hover:text-white py-[10px] w-full rounded-lg my-[20px]"
        >
          {" "}
          Register
        </button>
        <p className="text-[14px]">
          {" "}
          Already have an account?
          <span className="cursor-pointer text-secondary hover:text-primary font-bold">
            <Link href="/login">Login </Link>
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default page;
