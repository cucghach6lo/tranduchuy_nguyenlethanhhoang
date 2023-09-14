import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../utils/api";
import PuffLoader from "react-spinners/PuffLoader";
import "../css/Property.css";

import { FaShower } from "react-icons/fa6";
import { BiBed } from "react-icons/bi";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import Map from "../components/Map";
import useAuthCheck from "../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../components/Booking/BookingModal";
import UserDetailContext from "../components/UserDetailContext";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import Like from "../components/Like";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").splice(-1)[0];
  const { data, isError, isLoading } = useQuery(["residency", id], () =>
    getProperty(id)
  );

  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));

      toast.success("Hủy booking thành công", { position: "bottom-right" });
    },
  });

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
          <Like id={id} />
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

            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  variant="outline"
                  w={"100%"}
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
                  <span>Cancel booking</span>
                </Button>
                <span>
                  Your visit already booked for date{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModalOpened(true);
                }}
              >
                Book your visit
              </button>
            )}

            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={user?.email}
            />
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
