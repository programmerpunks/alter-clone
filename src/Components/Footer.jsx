import React, { useEffect } from "react";
import Email from "./Email";
import logo from "../images/logo.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Emails } from "../Emails";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div className="text-white bg-footer-img bg-no-repeat py-14 bg-cover ">
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
            <a href="#header">
              <img className=" md:mb-1" src={logo} alt="" />
            </a>
          </div>
          <div className="md:flex font-bold text-lg md:text-base md:space-x-6 md:justify-center lg:grid lg:grid-cols-6 lg:ml-auto lg:my-auto text-center">
            <a href="#header">
              <p className="pb-6 lg:py-9 hover:text-red-600">OVERVIEW</p>
            </a>
            <p className="pb-6 lg:py-9 hover:text-red-600">AGREEMENT</p>
            <a href="#team">
              <p className="pb-6 lg:py-9 hover:text-red-600">TEAM</p>
            </a>
            <p className="pb-6 lg:py-9 hover:text-red-600">WHITEPAPER</p>
            <p className="pb-6 lg:py-9 hover:text-red-600">LEGAL</p>
            <p className="pb-6 lg:py-9 hover:text-red-600">PITCH</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
