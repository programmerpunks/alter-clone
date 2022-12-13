import React, { useEffect } from "react";
import TeamCard from "./TeamCard";
import Aos from "aos";
import SocialLinks from "./SocialLinks";
import { TeamMemberDetail } from "../TeamMemberDetails";

const Team = (props) => {
  const members_with_image_display = TeamMemberDetail.slice(
    1,
    TeamMemberDetail.length + 1
  );

  return (
    <>
      <h1
        className=" bg-[#002952] text-white 2xl:text-[80px] md:text-4xl lg:text-5xl text-3xl py-10 text-center"
        id="team"
      >
        <div>OUR TEAM</div>
      </h1>
      <div className="flex justify-center bg-[#002952] pb-12">
        <div className="relative container">
          <TeamCard
            type="video"
            classname="lg:w-1/2 px-4 py-7 w-full"
            team_members={TeamMemberDetail[0]}
            button={props.button}
            enableModal={props.enableModal}
            data="fade-zoom-in"
          />
          <div className="grid grid-cols-12 w-full md:gap-4 gap-7 px-4">
            {members_with_image_display.map((team_member) => {
              return (
                <TeamCard
                  type="image"
                  team_members={team_member}
                  button={props.button}
                  enableModal={props.enableModal}
                  data="flip-left"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-14 bg-[#002952] text-white">
        <div data-aos="fade-up">
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default Team;
