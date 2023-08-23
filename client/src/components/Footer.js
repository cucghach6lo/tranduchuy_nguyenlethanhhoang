import React from "react";
import f_logo from "../asset/images/logo2.png";
import "../css/css.css";
function Footer() {
  return (
    <section className="f-wapper">
      <div className="f-container p-4 w-full flex gap-y-8 justify-around items-center flex-wrap">
        {/* left side  */}
        <div className="f-left flex justify-center items-center">
          <img src={f_logo} width={120} />

          <span className="secondaryText">
            Our vision is to make all people <br /> the best place to live for
            them.
          </span>
        </div>

        {/* right side  */}
        <div className="f-right flex flex-col justify-center items-start">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="gap-6 mt-6 font-semibold flex justify-center items-center flex-wrap">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
