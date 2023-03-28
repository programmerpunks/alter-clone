import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const logo = require("../../images/navbar/logo.svg").default;
const menu = require("../../images/navbar/menu.svg").default;
const rightArrow = require("../../images/navbar/rightarrow.svg").default;

function Navbar({
  connection,
  disconnect,
  getTokens,
  logout,
  readContract,
  wallet,
}) {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };
  console.log(window.location.pathname);

  return (
    <>
      <header className="text-black flex w-full backdrop-blur-[80px] h-24 items-center z-50 justify-between fixed">
        <div className="container max-w-full flex-wrap px-16 flex-col md:flex-row items-center flex ">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-black text-xl">
              <img src={logo} alt="/" />
            </span>
          </a>
          <nav className="hidden lg:flex md:ml-auto  flex-wrap items-center text-xl font-poppins text-white">
            <a
              href={
                window.location.pathname === "/mint"
                  ? "/#overview "
                  : "#overview"
              }
              className="mr-5 hover:border-b-4 border-red-600 "
            >
              Overview
            </a>
            <a href="/mint" className="mr-5 hover:border-b-4 border-red-600">
              Mint
            </a>
            <a
              href={window.location.pathname === "/mint" ? "/#team  " : "#team"}
              className="mr-5 hover:border-b-4 border-red-600"
            >
              Team
            </a>
            <a
              href={
                window.location.pathname === "/mint" ? "/#contact " : "#contact"
              }
              className="mr-5 hover:border-b-4 border-red-600"
            >
              Contact
            </a>
            <a
              href={window.location.pathname === "/mint" ? "/#about" : "#about"}
              className="mr-5 hover:border-b-4 border-red-600"
            >
              About Us
            </a>
            <button
              type="button"
              className={`text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl hover:content-['Hello'] focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-sm rounded-[55px] px-2 py-5 text-center  duration-700 hover:scale-110 ${
                logout ? "hover:before:content-['Disconnect:\\_']" : ""
              }`}
              onClick={() => {
                logout
                  ? (async function () {
                      await disconnect();
                    })()
                  : (async function () {
                      await connection();
                      await readContract();
                      await getTokens();
                      navigate("/mint");
                    })();
              }}
            >
              {wallet}
            </button>
          </nav>
        </div>

        <div onClick={handleNav} className="block lg:hidden m-5">
          <img src={menu} alt="/" />
        </div>
      </header>
      {nav ? (
        <header className="text-black flex w-full h-full lg:hidden items-center z-50 justify-between fixed ">
          <div className="fixed left-0 top-0 w-full z-60 backdrop-blur-[80px] ease-in-out duration-500">
            <div className="flex justify-between items-center m-5">
              <span className=" text-black ">
                <img src={logo} alt="/" />
              </span>
              <div onClick={handleNav} className="order-last m-5">
                <img src={rightArrow} alt="/" />
              </div>
            </div>
            <ul className="p-6 py-4 text-3xl font-extrabold text-white font-poppins">
              <li className="my-10 ">
                <a
                  href={
                    window.location.pathname === "/mint"
                      ? "/#overview "
                      : "#overview"
                  }
                >
                  Overview
                </a>
              </li>
              <li className="my-10">
                <a href="/mint">Mint</a>
              </li>
              <li className="my-10">
                <a
                  href={
                    window.location.pathname === "/mint" ? "/#team  " : "#team"
                  }
                >
                  Team
                </a>
              </li>
              <li className="my-10">
                <a
                  href={
                    window.location.pathname === "/mint"
                      ? "/#contact "
                      : "#contact"
                  }
                >
                  Contact
                </a>
              </li>
              <li className="my-10">
                {" "}
                <a
                  href={
                    window.location.pathname === "/mint" ? "/#about" : "#about"
                  }
                >
                  About Us
                </a>
              </li>
              <button
                type="button"
                className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-lg rounded-[55px] px-16 py-5 text-center  duration-700 hover:scale-110"
              >
                Buy Land
              </button>
            </ul>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
