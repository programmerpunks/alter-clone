import React from "react";
import { motion } from "framer-motion";
function ProjectCartItem(props) {
  return (
    <React.Fragment>
      <motion.div
        whileHover={{
          scale: 0.9,
        }}
        className=" col-span-12 xl:col-span-6 my-10 xl:my-0 2xl:h-[780px] xl:h-[650px] h-auto relative bg-slate-300 rounded-[55px] bg-opacity-30"
        data-aos={props.data}
        data-aos-duration="900"
      >
        <div className="flex w-full h-[45%]">
          <div className="w-full flex justify-content items-center">
            <img
              width="370"
              height="270"
              loading="lazy"
              src={props.picture}
              className="mx-auto transform  max-h-full"
              alt={props.title}
            />
          </div>
        </div>
        <div className="2xl:px-16 2xl:pb-16 2xl:pt-7 md:p-10 p-5 h-[55%] relative flex  flex-col justify-between">
          <h6 className="xl:text-[46px] text-4xl font-bold text-white text-center font-poppins ">
            {props.title}
          </h6>
          <div className="flex justify-center items-center">
            <span className="text-white 2xl:text-[20px] md:text-base text-sm my-5 md:text-left !text-center font-poppins">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              omnis quaerat debitis, ab sed officia quibusdam rerum nemo nostrum
              quidem excepturi eaque illo vitae, quam cumque fugit neque,
              laborum enim! Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Eveniet omnis quaerat debitis, ab sed officia quibusdam
              rerum nemo nostrum quidem excepturi eaque illo vitae, quam cumque
              fugit neque, laborum enim!
            </span>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-lg rounded-[55px] px-16 py-5 text-center  duration-700 hover:scale-110"
            >
              {props.btnTitle}
            </button>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}

export default ProjectCartItem;
