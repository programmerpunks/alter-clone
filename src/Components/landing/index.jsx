import React from "react";
// import { motion, useScroll } from "framer-motion";
import { Animator, ScrollPage, Move } from "react-scroll-motion";
const city = require("../../images/landing/Herocity.png");
const background = require("../../images/landing/Herobackground.png");
const background_sm = require("../../images/landing/Herobackground_sm.png");
const sky = require("../../images/landing/Herosky.png");
const foreground = require("../../images/landing/Heroforeground.png");
function LandingSection() {
  // const { scrollYProgress } = useScroll();
  return (
    <React.Fragment>
      <section
        className="section overflow-hidden relative block mb-20"
        id="header"
      >
        <div>
          <div className="lg:min-h-[130vh] min-h-[110vh] !overflow-visible w-screen flex justify-center items-center">
            <div className="absolute top-[25%] z-40">
              <h1 className="text-center 2xl:text-5xl md:text-3xl lg:text-4xl text-2xl text-floralWhite my-3 font-poppins text-white font-black">
                <ScrollPage>
                  <Animator animation={Move(0, 0, 0, 800)}>
                    <p>Reimagine a Play-and-Earn Metaverse</p>
                  </Animator>
                  <Animator animation={Move(0, 0, 0, 800)}>
                    <p className="2xl:text-[22px] lg:text-[18px] text-base font-poppins text-white text-floralWhite text-center font-medium font-primary drop-shadow-2xl z-500 relative max-w-xs md:max-w-2xl mx-auto md:px-0 px-5 leading-snug pt-4">
                      where the virtual and real world converge
                    </p>
                  </Animator>
                </ScrollPage>
              </h1>
            </div>

            <img
              src={city}
              alt="/"
              className="absolute top-0 left-0 z-30 w-full h-[20%] object-cover"
            />
            <div className="top-[30%] -left-[0px] z-20 lg:h-screen h-full w-full absolute object-center object-cover hidden md:block">
              <ScrollPage>
                <Animator animation={Move(0, 0, 0, 800)}>
                  <img src={background} alt="/" />
                </Animator>
              </ScrollPage>
            </div>
            <img
              src={background_sm}
              alt="/"
              className="bottom-0 left-0 z-20 lg:h-screen min-h-[60%] w-full absolute object-center object-cover block md:hidden"
            />
            <img
              src={sky}
              alt="/"
              className="absolute top-0 left-0 w-full h-[95%] object-cover"
            />
            <img
              src={foreground}
              alt="/"
              className="left-0 z-30 absolute w-full 2xl:bottom-[-15%] bottom-[-15%] object-cover lg:h-auto h-full"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default LandingSection;
