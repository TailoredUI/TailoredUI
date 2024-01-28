import { useState } from 'react'

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className="absolute right-4 top-16 z-10 flex w-[17rem] cursor-pointer items-start gap-4 rounded-md bg-white px-2 py-4 shadow-thin xs:w-[25rem] sm:top-24 sm:w-max sm:px-8 md:min-w-[32rem]"
      onClick={() => setIsOpen((state) => !state)}
    >
      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <h3 className="max-w-[25rem] text-ellipsis text-sm font-semibold text-gray-500 sm:text-lg">
          Lorem ipsum dolor sit
        </h3>
        <div
          className={`w- sm:text-md max-w-[25rem] text-ellipsis text-sm text-gray-500 sm:text-justify ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
    </div>
  )
}

export default Accordian
