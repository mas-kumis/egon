import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-slate-800 px-8 py-3 flex justify-between items-center">
      <Link className=" flex items-center space-x-4" href="/">
        <Image src={logo} alt="logo" width={40} height={40} />
        <div>
          <p className="text-white text-lg font-bold">Egon Blog</p>
          <p className="text-[8px] text-white font-thin">by Mas Kumis Dev</p>
        </div>
      </Link>
      <Link href="/addtopic">
        <button className="bg-white px-4 py-2 text-black">Add Topic</button>
      </Link>
    </nav>
  );
};

export default Navbar;
