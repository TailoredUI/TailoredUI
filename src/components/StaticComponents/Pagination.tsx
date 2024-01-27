const Pagination = ({ className }: { className: string }) => {
  return (
    <div
      className={`flex justify-between items-center p-2 xs:p-4 w-56 xs:w-72 h-16 rounded-md shadow-thin bg-white z-10 ${className}`}
    >
      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="text-gray-500 flex gap-1 xs:gap-2 items-center">
        <span className="size-9 flex items-center justify-center rounded-full hover:bg-[#574497] hover:text-white cursor-pointer">
          1
        </span>
        <span className="size-9 flex items-center justify-center rounded-full hover:bg-[#574497] hover:text-white cursor-pointer">
          2
        </span>
        <span className="size-9 flex items-center justify-center rounded-full bg-[#574497] text-white cursor-pointer">
          3
        </span>
        <span className="size-9 flex items-center justify-center rounded-full hover:bg-[#574497] hover:text-white cursor-pointer">
          4
        </span>
      </div>
      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
