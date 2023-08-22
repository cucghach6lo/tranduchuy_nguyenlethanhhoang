import React from "react";
import logo from "../asset/images/logo.png";
import cssHeader from "../css/Header.css";
const Header = () => {
  return (
    <section className="bg-[#2d2a2a]">
      <div className="py-4 flex flex-wrap justify-around  items-center text-[white] gap-y-8 p-6 w-full">
        <img src={logo} width={100} />
        <div className="flex justify-center items-center gap-8 h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button font-medium text-white rounded-[4px] border-none">
            <a href="">Contact </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
