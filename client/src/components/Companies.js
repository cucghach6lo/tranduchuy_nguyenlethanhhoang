import React from "react";
import prologis from "./../asset/images/prologis.png";
import tower from "./../asset/images/tower.png";
import equinix from "./../asset/images/equinix.png";
import realty from "./../asset/images/realty.png";
function companies() {
  return (
    <section>
      <div className="p-6 w-full flex gap-y-8 justify-around items-center flex-wrap gap-4">
        <img src={prologis} className="w-[9rem]" />
        <img src={tower} className="w-[9rem]" />
        <img src={equinix} className="w-[9rem]" />
        <img src={realty} className="w-[9rem]" />
      </div>
    </section>
  );
}

export default companies;
