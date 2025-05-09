import React from "react";
import cn from "../utils/cn";

const PersistentCharacter = ({ activeIndex }) => {
  return (
    <div
      className={cn(
        "fixed w-[14xem] h-[24rem] md:w-[20em] md:h-[36rem] sm:mt-0 mt-[3rem] bg-transparent z-10 -translate-x-1/2 transition-all pointer-events-none",
        activeIndex === 0 &&
          "opacity-0 rotate-0 duration-0 top-[60%] left-[50%]",
        activeIndex === 1 &&
          "opacity-100 -rotate-90 duration-500 top-[28%] left-[50%]",
        activeIndex === 2 &&
          "opacity-100 rotate-0 duration-500 bottom-[-7%] sm:left-[28%] left-[50%] top-auto"
      )}
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
