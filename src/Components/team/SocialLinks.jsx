import React from "react";

import SocialLink from "./SocialLink";
import { SocialLinkDetails } from "../../content/team/SocialLinks";

export const SocialLinks = () => {
  return (
    <div className="flex justify-evenly">
      {SocialLinkDetails.map((item) => {
        return <SocialLink link={item.link} icon={item.icon} />;
      })}
    </div>
  );
};
export default SocialLinks;
