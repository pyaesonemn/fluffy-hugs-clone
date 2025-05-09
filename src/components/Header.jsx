import React from "react";

const Header = () => {
  return (
    <div className="z-[1000] absolute w-full h-[100px] top-0 left-0 flex flex-row items-center justify-between">
      <div className="px-4 md:px-8">
        <img src="/fluffy-hugs-logo.webp" alt="logo" className="w-72 h-14" />
      </div>
    </div>
  );
};

export default Header;
