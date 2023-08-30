import React from "react";
import prologis from "./../asset/images/prologis.png";
import tower from "./../asset/images/tower.png";
import equinix from "./../asset/images/equinix.png";
import realty from "./../asset/images/realty.png";
import "../css/Companies.css";
function Companies() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={prologis} className="w-[9rem]" />
        <img src={tower} className="w-[9rem]" />
        <img src={equinix} className="w-[9rem]" />
        <img src={realty} className="w-[9rem]" />
      </div>
    </section>
  );
}

export default Companies;
