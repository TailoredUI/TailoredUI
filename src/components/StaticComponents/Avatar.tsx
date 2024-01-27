import { useState } from "react";
import avatar from "../../assets/images/avatar.jpeg";

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className="absolute top-[37rem] sm:top-[30rem] right-[18.5rem] xs:right-[23.7rem] sm:right-[26rem] w-max p-2 flex gap-2 items-center font-semibold rounded-full shadow-thin cursor-pointer bg-white z-10"
      onClick={() => setIsOpen((state) => !state)}
    >
      <div className="border-[4px] border-gray-500 rounded-full">
        <img
          src={avatar}
          alt="avator image"
          className="rounded-full w-12 h-12"
        />
      </div>
      <div
        className={`uppercase text-gray-500 pr-2 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        AKASH
      </div>
    </div>
  );
};

export default Avatar;
