import React from "react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <div className="px-[100px] my-[70px] w-screen">
      <div className="flex justify-between">
        <Image src="/brand.png" alt="" width={136} height={52} />
        <Image src="/brand1.png" alt="" height={52} width={136} />
        <Image src="/brand2.png" alt="" width={136} height={32} />
        <Image src="/brand3.png" alt="" width={135} height={32} />
        <Image src="/brand4.png" alt="" width={153} height={32} />
        {/* <Image src="/brand5.png" alt="" width={136} height={32} /> */}
      </div>
    </div>
  );
};

export default TrustedBy;
