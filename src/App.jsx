import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useState } from "react";

import PersistentCharacter from "./components/PersistentCharacter";
import Hero from "./screens/Hero";
import Banner from "./screens/Banner";
import Text from "./screens/Text";

import "swiper/css";
import "swiper/css/mousewheel";

const screens = [Hero, Banner, Text];

const CircularSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-screen w-full overflow-hidden">
      <PersistentCharacter activeIndex={activeIndex} />

      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={{ sensitivity: 1 }}
        speed={800}
        loop={true}
        modules={[Mousewheel]}
        className="mySwiper h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {screens.map((Screen, index) => (
          <SwiperSlide key={index} className="h-full">
            <Screen />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function App() {
  return <CircularSwiper />;
}
