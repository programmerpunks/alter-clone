import Aos from "aos";
import React from "react";
import { useEffect } from "react";

import { AttributeDetails } from "../../content/attribute";
import SingleItemCard from "./attributeItem";

function ItemsCard() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <section
        className="section overflow-hidden relative flex justify-center"
        data-aos="fade-up"
      >
        <div>
          <h4 className="lg:mb-28 mb-12 mt-28 2xl:text-[80px] md:text-4xl text-white lg:text-5xl text-3xl font-bold text-center font-poppins ">
            What makes Alter unique
          </h4>
          <div className="relative container">
            <div className="grid grid-cols-12 w-full lg:gap-5">
              {AttributeDetails.map((att) => {
                return (
                  <SingleItemCard
                    varImage={att.img_url}
                    firstHalfTitle={att.firstHalfTitle}
                    secondHalfTitle={att.secondHalfTitle}
                    para={att.paragraph}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <span className="animate-bounce animation_bg">
          <div className="xl:w-56 xl:h-56 w-32 h-12 absolute bg-no-repeat bg-cover bg-ellipse1 xl:top-[310%] xl:left-[-1500px]  top-[-10%] left-[4%]"></div>
        </span>

        <span className="animation_bg">
          <div className="xl:w-56 xl:h-56 w-32 h-32 absolute bg-no-repeat bg-cover bg-ellipse2  xl:top-[830px] xl:left-[-1100px] top-[30%] left-[30%]"></div>
        </span>

        <span className="animation_bg">
          <div className="xl:w-56 xl:h-56 w-32 h-32 absolute bg-no-repeat bg-cover bg-ellipse3 xl:top-[600%] top-[70%] xl:right-[6%] right-[60%]"></div>
        </span>
      </section>
    </>
  );
}

export default ItemsCard;
