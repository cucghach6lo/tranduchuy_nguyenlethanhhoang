import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "../css/Residencies.css";
import data from "../utils/slider.json";
import "../css/css.css";
import { sliderSetting } from "../utils/Command";

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="two-button gap-4">
      <button
        className="bg-cyan-500 shadow-lg shadow-cyan-500/60"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        // className="bg-blue-500 shadow-lg shadow-blue-500/50"
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};

function Residencies() {
  return (
    <section className="row-wrapper ">
      <div className="p-8 w-full r-container overflow-hidden  flex-col">
        <div className="r-header pb-8 flex flex-col justify-center items-start ">
          <span className="text-orange-400 text-2xl font-semibold block">
            Best Choices
          </span>
          <span className="text-[#8c8b8b] text-[2rem] font-bold">
            Popular Residencies
          </span>
        </div>

        <Swiper {...sliderSetting}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card p-4 flex flex-col justify-center items-center gap-[0.6rem] ">
                <img
                  className="w-full rounded-[10px] "
                  src={card.image}
                  alt="home"
                />

                <span className="secondaryText price ">
                  <span className="text-orange-400">$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText font-bold">{card.name}</span>
                <span className="secondaryText text-[0.7rem] w-60">
                  {card.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;
