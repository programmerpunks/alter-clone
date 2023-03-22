import React from "react";
import { HiOutlineMail } from "react-icons/hi";

export const Email = ({email}) => {
  return (
    <div className="flex flex-row mx-auto text-white justify-center bg-[#b946b9] bg-opacity-20 py-2 w-fit rounded-xl ">
      <div className="bg-[#b946b9] bg-opacity-10 rounded-full p-2 ml-3">
        <HiOutlineMail size={30} />
      </div>
      <div className="my-auto mx-10">
        <p>{email.email}</p>
      </div>
    </div>
  );
};

export default Email;
