import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingShapes from "../components/FloatingShapes";
import { useSwiperSlide } from "swiper/react";

const fullText = `ふわふわの動物たちに、\n囲まれて葺らしたい\n\nペーットや動物が大好恐。、なあなただヘ`;

const Text = () => {
  const [typedText, setTypedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  const { isActive } = useSwiperSlide();

  console.log(isActive);

  useEffect(() => {
    if (!isActive) return;

    let index = 0;
    setTypedText("");
    setIsDone(false);

    const type = () => {
      if (index < fullText.length) {
        const char = fullText[index] === "\n" ? "<br/>" : fullText[index];
        setTypedText((prev) => prev + char);
        index++;
        setTimeout(type, 100);
      } else {
        setIsDone(true);
      }
    };

    if (isActive) {
      type();
    }
  }, [isActive]);

  return (
    <div className="bg-white w-[100dvw] h-[100dvh]">
      <Header />
      <div className="ml-4 -mt-20 sm:ml-[35%] sm:-mt-0 flex flex-col items-center justify-center h-full">
        <p
          className={`text-2xl sm:text-4xl text-indigo-900 font-semibold text-left leading-[3.5rem] sm:leading-[4rem] tracking-[0.5rem] sm:tracking-[0.75rem] ${
            isDone ? "wavy-shake" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: typedText }}
        />
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
