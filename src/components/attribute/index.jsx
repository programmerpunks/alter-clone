import React from "react";
import SingleItemCard from "./attributeItem";
const item1 = require("../../images/attribute/item1.svg").default;
const item2 = require("../../images/attribute/item2.svg").default;
const item3 = require("../../images/attribute/item3.svg").default;
const item4 = require("../../images/attribute/item4.svg").default;
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa vitae quae dolorum veritatis quidem officiis, sequi qui autem voluptates tenetur!";

function ItemsCard() {
  return (
    <React.Fragment>
      <section className="section overflow-hidden relative flex justify-center">
        <div>
          <div>
            <h4 className="lg:mb-28 mb-12 mt-28 2xl:text-[80px] md:text-4xl text-white lg:text-5xl text-3xl font-bold text-center font-poppins ">
              What makes Alter unique
            </h4>

            <div className="relative container">
              <div className="grid grid-cols-12 w-full lg:gap-5">
                <SingleItemCard
                  varImage={item1}
                  firstHalfTitle={"Play-and-Earn"}
                  secondHalfTitle={"That’s Free To Play"}
                  para={paragraph}
                />
                <SingleItemCard
                  varImage={item2}
                  firstHalfTitle={"Play-and-Earn"}
                  secondHalfTitle={"That’s Free To Play"}
                  para={paragraph}
                />
                <SingleItemCard
                  varImage={item3}
                  firstHalfTitle={"Play-and-Earn"}
                  secondHalfTitle={"That’s Free To Play"}
                  para={paragraph}
                />
                <SingleItemCard
                  varImage={item4}
                  firstHalfTitle={"Play-and-Earn"}
                  secondHalfTitle={"That’s Free To Play"}
                  para={paragraph}
                />
              </div>
            </div>
          </div>
        </div>
        <span className=" animation_bg xl:h-24 lg:h-12 md:h-10 sm:h-6">
          <div className="xl:w-56 xl:h-56 w-32 h-32 absolute bg-no-repeat bg-cover bg-ellipse1 lg:top-[950px] lg:left-[-750px] xl:top-[600%] xl:left-[-300px] md:top-[1470px] md:left-[-600px] top-[1500px] left-[-520px]"></div>
        </span>
        <span className="animation_bg xl:h-24 lg:h-12 md:h-10 sm:h-6">
          <div className="xl:w-56 xl:h-56 w-32 h-32 absolute bg-no-repeat bg-cover bg-ellipse2 lg:top-[570px] lg:left-[-750px] xl:top-[830px] xl:left-[-1100px] md:top-[780px] md:left-[-550px] top-[800px] left-[-470px]"></div>
        </span>
        <span className="animation_bg xl:h-24 lg:h-12 md:h-10 sm:h-6">
          <div className="xl:w-56 xl:h-56 w-32 h-32 absolute bg-no-repeat bg-cover bg-ellipse3 lg:top-[300px] lg:left-[-1000px] xl:top-[310%] xl:left-[-1500px] md:top-[300px] md:left-[-765px] top-[300px] xl:right-[6%] right-[500px]"></div>
        </span>
      </section>
    </React.Fragment>
  );
}

export default ItemsCard;
