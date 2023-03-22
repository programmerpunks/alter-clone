import React from "react";
import { GrFormClose } from "react-icons/gr";

import SocialLink from "./SocialLink";

export const TeamModal = ({ closeModal, memberDetails }) => {
  return (
    <div className="fixed inset-0 flex mx-16 justify-center z-10 bg-opacity-25 items-center text-left xl:mx-[20%]">
      <div className="text-white bg-slate-500 rounded-lg p-10">
        <div
          className="flex justify-end my-5"
          onClick={() => closeModal(false)}
        >
          <GrFormClose size={40} />
        </div>

        {memberDetails.img_url ? (
          <div>
            <img
              className="h-[20rem] rounded-3xl mx-auto"
              src={memberDetails.img_url}
              alt=""
            />
          </div>
        ) : (
          <video
            className="rounded-3xl h-[80%] mx-auto"
            src={memberDetails.video_url}
            controls
          ></video>
        )}

        <h3 className="font-bold text-lg mt-10">{memberDetails.name}</h3>
        <p className="text-thin">{memberDetails.designation}</p>
        <p className="pb-5 text-gray-300 text-sm">
          {memberDetails.about_information}
        </p>
        <SocialLink />
      </div>
    </div>
  );
};
