import React from "react";
import { GrFormClose } from "react-icons/gr";
import SocialLink from "./SocialLink";

export const TeamModal = (props) => {
  return (
    <div className="fixed inset-0 flex mx-16 justify-center z-10 bg-opacity-25 items-center text-left xl:mx-[20%]">
      <div className="text-white bg-slate-500 rounded-lg p-10">
        <div
          className="flex justify-end my-5"
          onClick={() => props.closeModal(false)}
        >
          <GrFormClose size={40} />
        </div>

        {props.memberDetails.img_url ? (
          <div>
            <img
              className="h-[20rem] rounded-3xl mx-auto"
              src={props.memberDetails.img_url}
              alt=""
            />
          </div>
        ) : (
          <video
            className="rounded-3xl h-[80%] mx-auto"
            src={props.memberDetails.video_url}
            controls
          ></video>
        )}

        <h3 className="font-bold text-lg mt-10">{props.memberDetails.name}</h3>
        <p className="text-thin">{props.memberDetails.designation}</p>
        <p className="pb-5 text-gray-300 text-sm">
          {props.memberDetails.about_information}
        </p>
        <SocialLink />
      </div>
    </div>
  );
};
