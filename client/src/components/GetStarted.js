import React from "react";
import "../css/css.css";
import "../css/GetStarted.css";

function GetStarted() {
  return (
    <section className="g-wapper ">
      <div className="g-container py-16 px-32 w-full flex gap-y-8 justify-around items-center flex-wrap">
        <div className="inner-container flex flex-col w-full justify-around items-center  ">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:cuccghach6lo@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
