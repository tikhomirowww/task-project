import React from "react";
import Image from "next/image";

const SidePanel = () => {
  return (
    <div className="h-full w-[13rem] border-t-2 border-grayLayout bg-white">
      <div className="w-[88%] m-auto mt-8 h-8 bg-grayPostBtn rounded-lg flex items-center">
        <Image
          className="ml-4 "
          src="/color-swatch.svg"
          width={24}
          height={24}
          alt="color-swatch"
        />
        <h3 className="ml-2 text-[14px] leading-4 font-normal">Posts</h3>
      </div>
    </div>
  );
};

export default SidePanel;
