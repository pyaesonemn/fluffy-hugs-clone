import React from "react";
import Footer from "../components/Footer";
import FloatingShapes from "../components/FloatingShapes";

const Banner = () => {
  return (
    <div className="bg-[#FCF6EB] w-[100dvw] h-[100dvh] overflow-hidden relative">
      <FloatingShapes
        count={8}
        backgroundColor="transparent"
        direction="vertical"
      />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          src="/fluffy-hugs-logo.webp"
          alt="logo"
          className="w-[64rem] object-contain"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Banner;
