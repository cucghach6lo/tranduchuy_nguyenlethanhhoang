import React from "react";
import "../css/Contact.css";
import image_Contact from "../asset/images/contact.jpg";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdVideoCall } from "react-icons/md";

function Contact() {
  return (
    <section className="c-wapper">
      <div className="c-container p-6 w-full flex gap-y-8 justify-around items-center flex-wrap">
        {/* left side  */}
        <div className="c-left flex flex-col justify-center items-start">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="text-[#8c8b8b] text-[1rem]">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <div className="contactModes flex flex-col justify-center items-start">
            {/* first row */}

            <div className="flex flex-row justify-center items-start gap-6">
              <div className="mode flex justify-center items-center flex-col">
                <div className="flexStart">
                  <div className="flexCenter c-icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+84 7785 6965</span>
                  </div>
                </div>
                <div className="flexCenter button ">Call Now</div>
              </div>

              <div className="mode flex justify-center items-center flex-col">
                <div className="flexStart">
                  <div className="flexCenter c-icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+84 7785 6965</span>
                  </div>
                </div>
                <div className="flexCenter button ">Chat Now</div>
              </div>
            </div>
            {/* second row  */}
            <div className="flex flex-row justify-center items-start gap-6">
              <div className="mode flex justify-center items-center flex-col">
                <div className="flexStart">
                  <div className="flexCenter c-icon">
                    <MdVideoCall size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+84 7785 6965</span>
                  </div>
                </div>
                <div className="flexCenter button ">Video Call Now</div>
              </div>

              <div className="mode flex justify-center items-center flex-col">
                <div className="flexStart">
                  <div className="flexCenter c-icon">
                    <MdVideoCall size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+84 7785 6965</span>
                  </div>
                </div>
                <div className="flexCenter button ">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="c-right">
          <div className="c-image-container truncate  w-[30rem] h-[35rem]">
            <img src={image_Contact} className="h-full w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
