import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "../css/Residencies.css";
import data from "../utils/slider.json";
import "../css/css.css";

function Residencies() {
  return (
    <section className="row-wrapper">
      <div className="p-8 w-full r-container ">
        <div className="r-header flex flex-col justify-center items-start">
          <span className="text-orange-400 text-2xl font-semibold">
            Best Choices
          </span>
          <span className="text-[#8c8b8b] text-[2rem] font-bold">
            Popular Residencies
          </span>
        </div>

        <Swiper>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText price">
                  <span>$</span>
                  <span>{card.price}</span>
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
