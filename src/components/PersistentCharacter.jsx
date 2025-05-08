import React from "react";

const PersistentCharacter = ({ activeIndex }) => {
  const getElementStyle = (activeIndex) => {
    if (activeIndex === 0) {
      return {
        transform: "rotate(0deg)",
        opacity: 0,
        left: "50%",
        top: "60%",
        transitionDuration: "0ms",
      };
    } else if (activeIndex === 1) {
      return {
        transform: "rotate(-90deg)",
        opacity: 1,
        left: "50%",
        top: "28%",
        transitionDuration: "500ms",
      };
    } else {
      return {
        transform: "rotate(0deg)",
        opacity: 1,
        left: "28%",
        bottom: "-7%",
        top: "auto",
        transitionDuration: "500ms",
      };
    }
  };

  const style = getElementStyle(activeIndex);

  return (
    <div
      className="fixed w-[20em] h-[36rem] bg-transparent z-10 -translate-x-1/2 transition-all pointer-events-none"
      style={{
        transform: style.transform,
        opacity: style.opacity,
        left: style.left,
        top: style.top,
        bottom: style.bottom,
        transitionDuration: style.transitionDuration,
      }}
    >
      <img
        src="/rotate-character.webp"
        alt="img1"
        className="w-full h-full object-fill"
      />
    </div>
  );
};

export default PersistentCharacter;
