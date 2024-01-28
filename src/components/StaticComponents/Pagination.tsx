const Pagination = ({ className }: { className: string }) => {
  return (
    <div
      className={`z-10 flex h-16 w-56 items-center justify-between rounded-md bg-white p-2 shadow-thin xs:w-72 xs:p-4 ${className}`}
    >
      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="flex items-center gap-1 text-gray-500 xs:gap-2">
        <span className="flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#574497] hover:text-white">
          1
        </span>
        <span className="flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#574497] hover:text-white">
          2
        </span>
        <span className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#574497] text-white">
          3
        </span>
        <span className="flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#574497] hover:text-white">
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
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  )
}

export default Pagination
