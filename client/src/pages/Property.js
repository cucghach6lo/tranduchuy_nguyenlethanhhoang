import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../utils/api";
import PuffLoader from "react-spinners/PuffLoader";
import "../css/Property.css";
import { AiFillHeart } from "react-icons/ai";
import { FaShower } from "react-icons/fa6";
import { BiBed } from "react-icons/bi";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import Map from "../components/Map";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").splice(-1)[0];
  const { data, isError, isLoading } = useQuery(["residency", id], () =>
    getProperty(id)
  );

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          This is an individual property path
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className=" property-container flexColStart innerWidth paddings">
        {/* like button  */}
        <div className="like">
          <AiFillHeart size={24} color="pink" />
        </div>
        {/* img  */}
        <img src={data?.image} alt="home image" />

        <div className="property-details flexCenter">
          {/* left  */}
          <div className="flexColStart">
            {/* head  */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText text-base">$ {data?.price}</span>
            </div>
            {/* facilities */}
            <div className="facilities flexStart">
              <div className="facility flexStart">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>
              <div className="facility flexStart">
                <BiBed size={20} color="1F3E72" />
                <span>{data?.facilities?.beds} Beds</span>
              </div>
              <div className="facility flexStart">
                <FaParking size={20} color="1F3E72" />
                <span>{data?.facilities?.parkings} Parkings</span>
              </div>
              <div className="facility flexStart">
                <MdMeetingRoom size={20} color="1F3E72" />
                <span>{data?.facilities?.rooms} Rooms</span>
              </div>
            </div>

            {/* description  */}
            <div className="secondaryText text-justify">
              {data?.description}
            </div>

            {/* dia chi  */}
            <div className="flexStart gap-4">
              <MdLocationPin size={25} color="1F3E72" />
              <span className="secondaryText">
                {data?.address}
                {data?.city}
                {data?.country}
              </span>
            </div>

            {/* booking  */}
            <button className="button">Book your visit</button>
          </div>

          {/* right  */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
