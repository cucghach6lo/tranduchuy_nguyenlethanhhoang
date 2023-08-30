import React from "react";
import "../css/css.css";
import "../css/Properties.css";
import SearchBar from "./Search/SearchBar";
import useProperties from "../hooks/useProperties";
import PuffLoader from "react-spinners/PuffLoader";
import PropertyCard from "./PropertyCard";
import "../utils/slider.json";

function Properties() {
  const { data, isError, isLoading } = useProperties();
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius="1"
          color="#4066ff"
          aria-label="pull-loading"
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className=" flexColCenter paddings innerWidth properties-container">
        <SearchBar />

        <div className="properties flexCenter paddings">
          {data.map((card, i) => (
            <PropertyCard card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Properties;
