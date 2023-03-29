import React from "react";

const SocialLink = ({ link, icon }) => {
  return (
    <div className="bg-slate-700 rounded-full p-3 w-fit h-fit hover:scale-125 duration-500">
      <a href={link}>{icon}</a>
    </div>
  );
};

export default SocialLink;
