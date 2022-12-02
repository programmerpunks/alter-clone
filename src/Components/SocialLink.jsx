import React from "react";
import { FiTwitter } from "react-icons/fi";

const SocialLink = () => {
  return (
    <div className="bg-slate-700 rounded-full p-3 w-fit h-fit hover:scale-125 duration-500">
      <FiTwitter size={20} />
    </div>
  );
};

export default SocialLink;
