import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import css from "../css/css.css";
import "../css/Value.css";
import image_left from "../asset/images/value.png";
import data from "../utils/accordion";

function Value() {
  const [className, setClassName] = useState(null);
  return (
    <section className="v-wrapper">
      <div className="v-container p-6 w-full flex gap-y-8 items-center flex-wrap">
        {/* left side  */}
        <div className="v-left">
          <div className="v-image-container truncate  w-[30rem] h-[35rem]">
            <img src={image_left} />
          </div>
        </div>

        {/* right side  */}
        <div className="v-right flex flex-col justify-center items-start text-start gap-2">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="text-[#8c8b8b] text-[1rem]">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className=" mt-8 border-none"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="bg-white p-4 w-full flex justify-between cursor-pointer ">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flex gap-y-8 justify-center flex-wrap icon">
                        {item.icon}
                      </div>
                      <span className="text-[#1f3e72] font-bold text-[1.5rem]">
                        {item.heading}
                      </span>
                      <div className="flex gap-y-8 justify-center flex-wrap icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
