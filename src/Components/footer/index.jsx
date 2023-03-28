import Aos from "aos";
import React, { useEffect } from "react";

import Email from "./Email";
import { Emails } from "../../content/footer";
import logo from "../../images/footer/logo.svg";

import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div
        className="text-white bg-footer-img bg-no-repeat py-14 bg-cover"
        id="contact"
      >
        <div className="space-y-7" data-aos="fade-up">
          {Emails.map((email) => {
            return <Email email={email} />;
          })}
        </div>
        <div
          data-aos="fade-up"
          className=" bg-[#b946b9] bg-opacity-20 py-5 mt-10 rounded-3xl md:rounded-3xl sm:mx-[2%] md:mx-[5%] lg:flex lg:px-10"
        >
          <div className="justify-center flex py-12">
            <a href="/">
              <img className=" md:mb-1" src={logo} alt="" />
            </a>
          </div>
          <div className="md:flex font-bold text-lg md:text-base md:space-x-6 md:justify-center lg:grid lg:grid-cols-6 lg:ml-auto lg:my-auto text-center">
            <a
              href={
                window.location.pathname === "/mint"
                  ? "/#overview "
                  : "#overview"
              }
            >
              <p className="pb-6 lg:py-9 hover:text-red-600">OVERVIEW</p>
            </a>
            <a href="/mint">
              <p className="pb-6 lg:py-9 hover:text-red-600">Mint</p>
            </a>
            <a
              href={window.location.pathname === "/mint" ? "/#team  " : "#team"}
            >
              <p className="pb-6 lg:py-9 hover:text-red-600">TEAM</p>
            </a>
            <a
              href={
                window.location.pathname === "/mint" ? "/#contact " : "#contact"
              }
            >
              <p className="pb-6 lg:py-9 hover:text-red-600">Contact</p>
            </a>
            <a
              href={window.location.pathname === "/mint" ? "/#about" : "#about"}
            >
              <p className="pb-6 lg:py-9 hover:text-red-600">About Us</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
