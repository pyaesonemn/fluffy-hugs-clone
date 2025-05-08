import React from "react";
import Footer from "../components/footer";
import Header from "../components/Header";

const Hero = () => {
  const imageGrid = [
    // Row 1
    {
      src: "/img1.webp",
      top: -240,
      left: -360,
      zIndex: 10,
      animation: "float-animation float-animation-delay-2",
    },
    {
      src: "/img2.webp",
      top: -280,
      left: -40,
      zIndex: 10,
      animation: "float-animation-alt float-animation-delay-1",
    },
    {
      src: "/img3.webp",
      top: -320,
      left: 280,
      zIndex: 10,
      animation: "float-animation float-animation-delay-3",
    },
    {
      src: "/img4.webp",
      top: -360,
      left: 600,
      zIndex: 10,
      animation: "float-animation-alt float-animation-delay-2",
    },
    {
      src: "/img5.webp",
      top: -400,
      left: 920,
      zIndex: 10,
      animation: "float-animation float-animation-delay-4",
    },

    // Row 2
    {
      src: "/img6.webp",
      top: -80,
      left: -200,
      zIndex: 20,
      animation: "float-animation-alt float-animation-delay-3",
    },
    {
      src: "/img7.webp",
      top: -120,
      left: 120,
      zIndex: 20,
      animation: "float-animation float-animation-delay-2",
    },
    {
      src: "/img8.webp",
      top: -160,
      left: 440,
      zIndex: 20,
      animation: "float-animation-alt float-animation-delay-1",
    },
    {
      src: "/img9.webp",
      top: -200,
      left: 760,
      zIndex: 20,
      animation: "float-animation float-animation-delay-4",
    },
    {
      src: "/img10.webp",
      top: -240,
      left: 1080,
      zIndex: 20,
      animation: "float-animation-alt float-animation-delay-3",
    },

    // Row 3
    {
      src: "/img11.webp",
      top: 120,
      left: -360,
      zIndex: 30,
      animation: "float-animation float-animation-delay-1",
    },
    {
      src: "/img12.webp",
      top: 80,
      left: -40,
      zIndex: 30,
      animation: "float-animation-alt float-animation-delay-4",
    },
    {
      src: "/img13.webp",
      top: 40,
      left: 280,
      zIndex: 30,
      animation: "float-animation float-animation-delay-2",
    },
    {
      src: "/img14.webp",
      top: 0,
      left: 600,
      zIndex: 30,
      animation: "float-animation-alt float-animation-delay-3",
    },
    {
      src: "/img15.webp",
      top: -40,
      left: 920,
      zIndex: 30,
      animation: "float-animation float-animation-delay-1",
    },

    // Row 4
    {
      src: "/img6.webp",
      top: 280,
      left: -200,
      zIndex: 40,
      animation: "float-animation-alt float-animation-delay-2",
    },
    {
      src: "/img7.webp",
      top: 240,
      left: 120,
      zIndex: 40,
      animation: "float-animation float-animation-delay-3",
    },
    {
      src: "/img8.webp",
      top: 200,
      left: 440,
      zIndex: 40,
      animation: "float-animation-alt float-animation-delay-4",
    },
    {
      src: "/img9.webp",
      top: 160,
      left: 760,
      zIndex: 40,
      animation: "float-animation float-animation-delay-1",
    },
    {
      src: "/img10.webp",
      top: 120,
      left: 1080,
      zIndex: 40,
      animation: "float-animation-alt float-animation-delay-2",
    },

    // Row 5
    {
      src: "/img11.webp",
      top: 440,
      left: -360,
      zIndex: 50,
      animation: "float-animation float-animation-delay-4",
    },
    {
      src: "/img12.webp",
      top: 400,
      left: -40,
      zIndex: 50,
      animation: "float-animation-alt float-animation-delay-3",
    },
    {
      src: "/img13.webp",
      top: 360,
      left: 280,
      zIndex: 50,
      animation: "float-animation float-animation-delay-2",
    },
    {
      src: "/img14.webp",
      top: 320,
      left: 600,
      zIndex: 50,
      animation: "float-animation-alt float-animation-delay-1",
    },
    {
      src: "/img15.webp",
      top: 280,
      left: 920,
      zIndex: 50,
      animation: "float-animation float-animation-delay-3",
    },
  ];

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
