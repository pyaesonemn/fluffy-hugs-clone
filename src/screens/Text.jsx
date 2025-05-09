import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingShapes from "../components/FloatingShapes";

const Text = () => {
  return (
    <div className="bg-[#FCF6EB] w-[100dvw] h-[100dvh]">
      <Header />
      <div className="ml-4 -mt-20 sm:ml-[35%] sm:-mt-0 flex flex-col items-center justify-center h-full">
        <p className="text-2xl sm:text-4xl text-indigo-900 font-semibold text-left leading-[4rem] tracking-[0.75rem]">
          ふわふわの動物たちに、
          <br /> 囲まれて葺らしたい <br />
          <br />
          ペーットや動物が大好恐。、なあなただヘ
        </p>
      </div>
      <FloatingShapes
        count={8}
        backgroundColor="transparent"
        direction="horizontal"
      />
      <Footer />
    </div>
  );
};

export default Text;
