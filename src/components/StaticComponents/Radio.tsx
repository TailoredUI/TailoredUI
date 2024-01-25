import { useState } from "react";

const Radio = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      className={`absolute top-[26rem] sm:top-80 right-[16.5rem] xs:right-[21.7rem] sm:right-96 rounded-2xl w-16 h-8 p-1 rotate-90 sm:rotate-0 z-10 ${
        toggle ? "shadow-thin" : ""
      } ${toggle ? "bg-green-400" : "bg-gray-400"} flex items-center justify-${
        toggle ? "end" : "start"
      } cursor-pointer`}
      onClick={() => setToggle((state) => !state)}
    >
      <div
        className={`rounded-full w-6 h-6 ${
          toggle ? "bg-white" : "bg-gray-600"
        }`}
      />
    </div>
  );
};

export default Radio;
