import React from "react";

const Footer = () => {
  return (
    <div className="z-[1000] w-full h-[100px] absolute bottom-0 left-0 flex flex-row items-center justify-between">
      <div className="px-10 flex flex-row items-center gap-x-4">
        <img src="/discord.svg" alt="discord" className="w-10 h-10" />
        <img src="/opensea.svg" alt="opensea" className="w-10 h-10" />
        <img src="/twitter.svg" alt="twitter" className="w-10 h-10" />
      </div>
      <div className="text-white bg-indigo-900 w-[16rem] h-[10rem] rounded-[2rem] absolute bottom-0 right-[-40px] flex items-center justify-center">
        View collections
      </div>
    </div>
  );
};

export default Footer;
