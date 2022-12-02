import React from "react";
import SingleOverviewCartItem from "./overviewItem";
const overItem = require("../../images/overview/overviewItem.png");

function OverviewCard() {
  return (
    <React.Fragment>
      <div className="flex justify-center mt-20  bg-cosmic cosmic_bg p-10">
        <section className="p-20 overflow-hidden relative bg-slate-300 bg-opacity-30 rounded-[55px] mt-20 flex justify-center">
          <div className="container">
            <h4 className="2xl:text-[80px] md:text-4xl lg:text-5xl text-3xl font-bold text-center text-white">
              Overview
            </h4>
            <div className="grid grid-cols-12 lg:gap-7 md:gap-5 mt-10">
              <SingleOverviewCartItem
                picture={overItem}
                title={"NEXUS WORLD"}
              />
              <SingleOverviewCartItem
                picture={overItem}
                title={"NEXUS WORLD"}
              />{" "}
              <SingleOverviewCartItem
                picture={overItem}
                title={"NEXUS WORLD"}
              />{" "}
              <SingleOverviewCartItem
                picture={overItem}
                title={"NEXUS WORLD"}
              />{" "}
              <SingleOverviewCartItem
                picture={overItem}
                title={"NEXUS WORLD"}
              />{" "}
              <SingleOverviewCartItem
                picture={overItem}
                title={"NEXUS WORLD"}
              />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default OverviewCard;
