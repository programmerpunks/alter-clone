import Aos from "aos";
import React, { useEffect } from "react";

import { OverviewDetails } from "../../content/overview";
import SingleOverviewCartItem from "./overviewItem";

function OverviewCard() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div
        className="flex justify-center mt-20 bg-cosmic cosmic_bg p-10"
        data-aos="fade-up"
        id="overview"
      >
        <section className="p-5 sm:p-20 overflow-hidden relative bg-slate-300 bg-opacity-30 rounded-[55px] mt-20 flex justify-center">
          <div className="container">
            <h4 className="2xl:text-[80px] md:text-4xl lg:text-5xl text-3xl font-bold text-center text-white">
              Overview
            </h4>
            <div className="grid grid-cols-12 lg:gap-7 md:gap-5 mt-10">
              {OverviewDetails.map((overviewItem) => {
                return (
                  <SingleOverviewCartItem
                    picture={overviewItem.img_url}
                    title={overviewItem.title}
                    details={overviewItem.details}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OverviewCard;
