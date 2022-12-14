import React from "react";

function SingleItemCard({varImage, firstHalfTitle, secondHalfTitle, para}) {
  return (
    <>
      <div className="col-span-12 lg:col-span-6 backdrop-blur-[60px] backdrop-slate-300 attribute_bg rounded-[55px]   2xl:min-h-[450px] px-5 z-10 my-10 xl:my-5">
        <div>
          <img
            width="177"
            height="200"
            loading="lazy"
            src={varImage}
            alt = "/"
            className=" transform -translate-y-1/4 mx-auto"
          />
        </div>
        <div>
          <div className="text-center 2xl:text-[36px] text-white md:text-3xl text-2xl font-semibold text-floralWhite mb-5 !leading-[36px] font-poppins">
            <p>
              {firstHalfTitle}
              <br />
              {secondHalfTitle}
            </p>
          </div>
          <p className="text-center my-4 2xl:text-[20px] md:text-lg text-base text-gray leading-[34px] font-poppins text-[#94A0BD] ">
          {para}
          </p>
        </div>
      </div>
    </>
  );
}

export default SingleItemCard;
