import { useState } from "react";

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className="w-[17rem] xs:w-[25rem] sm:w-max md:min-w-[32rem] bg-white rounded-md px-2 sm:px-8 py-4 flex items-start gap-4 absolute top-16 sm:top-24 right-4 cursor-pointer z-10 shadow-thin"
      onClick={() => setIsOpen((state) => !state)}
    >
      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className={`w-6 h-6 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <h3 className="text-gray-500 max-w-[25rem] font-semibold text-sm sm:text-lg text-ellipsis">
          Lorem ipsum dolor sit
        </h3>
        <div
          className={`text-gray-500 w- max-w-[25rem] text-ellipsis sm:text-justify text-sm sm:text-md ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
    </div>
  );
};

export default Accordian;
