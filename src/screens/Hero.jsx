import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { imageGrid } from "../../constants.jsx";

const Hero = () => {
  return (
    <div className="relative bg-white w-[100dvw] h-[100dvh] overflow-hidden">
      <Header />
      <div className="relative bg-white w-full h-full">
        {imageGrid.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="hero-bg"
            className={`w-[40rem] h-[40rem] absolute ${image.animation}`}
            style={{
              top: `${image.top}px`,
              left: `${image.left}px`,
              zIndex: image.zIndex,
            }}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
