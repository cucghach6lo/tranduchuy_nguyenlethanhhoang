import React from "react";
import hero from "../asset/images/hero-image.png";
import css from "../css/Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="section-hero relative">
      <div className="content p-6 w-full flex gap-y-8 justify-around items-center flex-wrap">
        <div className="content-left gap-[12rem] flex flex-col justify-center items-start">
          <div className="title flex flex-col gap-12 ">
            <div className="orange-circle"></div>
            <h1 className="font-semibold leading-[4rem] text-[4rem] text-start ">
              Discover <br /> Most Suitable <br /> Property
            </h1>
            <div className="description flex flex-col justify-center items-start">
              <span className="text-[#8c8b8b] text-[1rem]">
                Find a variety of properties that suit you very easilty
              </span>
              <span className="text-[#8c8b8b] text-[1rem]">
                Forget all difficulties in finding a residence for you
              </span>
            </div>

            <div className="search-bar bg-white justify-between flex flexCenter w-full">
              <HiLocationMarker color="#4066ff" size={30} />
              <input
                type="text"
                className="text-[#131110] border-none outline-none"
              />
              <button className="button rounded-[4px]  ">search</button>
            </div>

            <div className="justify-between flex flexCenter w-full items-start ">
              <div className="review flex flex-col items-center justify-around ">
                <span className="gap-1 flex">
                  <CountUp start={8000} end={9000} duration={4} />
                  <span className="text-orange-400">+</span>
                </span>
                <span className="text-[#8c8b8b] text-[1rem]">
                  Premium Product
                </span>
              </div>
              <div className="review flex flex-col items-center justify-between ">
                <span className="gap-1 flex">
                  <CountUp start={300} end={2000} duration={4} />
                  <span className="text-orange-400">+</span>
                </span>
                <span className="text-[#8c8b8b] text-[1rem]">
                  Happy Custome
                </span>
              </div>
              <div className="review flex flex-col items-center justify-between ">
                <span className="gap-1 flex">
                  <CountUp end={300} duration={4} />
                  <span className="text-orange-400">+</span>
                </span>
                <span className="text-[#8c8b8b] text-[1rem]">
                  Awards Winning
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-right flex flex-wrap justify-center items-center gap-y-8">
          <div className="image-container truncate  w-[30rem] h-[35rem]">
            <img src={hero} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
