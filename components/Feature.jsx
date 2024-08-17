import React from "react";
import Image from "next/image";
const Feature = () => {
  return (
    <div>
      <h2 className="font-bold text-[36px]">Features Post</h2>
      <div className="mt-[60px] mx-[30px] max-w-[669px]">
        {/* Image */}
        <div className="w-[669px] h-[352px] bg-slate-400">
          <Image src="/feature.png" alt="" width={669} height={352} />
        </div>
        <p className="my-[20px] text-[14px]">By John Doe l May 23, 2022</p>
        <h3 className="font-bold text-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </h3>
        <p className="my-[20px] text-mediumgrey max-w-[500px]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <button className="bg-secondary w-[200px] h-[60px] text-black font-semibold hover:bg-[#EDC14A] cursor-pointer text-[18px]">
          Read More..
        </button>
      </div>
    </div>
  );
};

export default Feature;
