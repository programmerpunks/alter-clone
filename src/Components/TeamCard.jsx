import React from "react";
import SocialLink from "./SocialLink";

const TeamCard = (props) => {
  const imageClass = `${props.class} h-fit`;
  return (
    <>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 container mx-auto text-left justify-center">
        <div className={imageClass}>
          {props.type === "video" ? (
            <div>
              <video
                className="rounded-t-xl"
                src={props.team_members.video_url}
                controls
              ></video>
            </div>
          ) : (
            <div>
              <img
                className="md:w-full w-full h-[350px] object-cover object-center rounded-t-xl"
                src={props.team_members.img_url}
                alt="blog"
              />
            </div>
          )}

          <div className="p-6 bg-[#12304e] rounded-b-xl text-white">
            <h1 className="title-font text-3xl font-medium mb-1">
              {props.team_members.name}
            </h1>
            <h2 className=" mb-4">{props.team_members.designation}</h2>
            <p className="leading-relaxed mb-3 text-base text-gray-400">
              {props.team_members.about_information.slice(0, 100)}
            </p>
            <button
              onClick={() => props.enableModal(props.team_members)}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              type="button"
            >
              Read More...
            </button>
            <div className="my-3">
              <SocialLink />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
