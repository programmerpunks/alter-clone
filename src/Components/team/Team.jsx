import Aos from "aos";
import React, { useEffect } from "react";

import SocialLinks from "./SocialLinks";
import TeamCard from "./TeamCard";
import { TeamMemberDetail } from "../../content/team";

const Team = ({ enableModal }) => {
  const members_with_image_display = TeamMemberDetail.slice(
    1,
    TeamMemberDetail.length + 1
  );
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <h1
        className=" bg-[#002952] text-white 2xl:text-[80px] md:text-4xl lg:text-5xl text-3xl py-10 text-center"
        id="team"
      >
        <div>OUR TEAM</div>
      </h1>
      <div className="flex justify-center bg-[#002952] pb-12">
        <div className="relative container" data-aos="fade-up">
          <TeamCard
            type="video"
            clas="lg:w-1/2 px-4 py-7 w-full"
            team_members={TeamMemberDetail[0]}
            enableModal={enableModal}
          />
          <div className="grid grid-cols-12 w-full md:gap-4 gap-7 px-4">
            {members_with_image_display.map((team_member) => {
              return (
                <TeamCard
                  type="image"
                  clas=""
                  team_members={team_member}
                  enableModal={enableModal}
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
