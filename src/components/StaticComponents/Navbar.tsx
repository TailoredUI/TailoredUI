const Navbar = () => {
  return (
    <div className="absolute -top-4 right-4 flex w-max items-center justify-between gap-[2rem] rounded-lg bg-white px-8 py-4 text-gray-500 shadow-thin lg:gap-16 xl:w-1/2 2xl:gap-0">
      <div className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
        </svg>
        <span className="font-bold">TailoredUI</span>
      </div>
      <div className="hidden gap-2 md:flex">
        <span>HOME</span>
        <span>CONTACT</span>
        <span>ABOUT US</span>
      </div>
      <div className="hidden gap-2 sm:flex">
        <div className="cursor-pointer rounded-md border-2 border-gray-400 px-4 py-2 hover:bg-slate-300">
          LOGIN
        </div>
        <div className="vertical flex cursor-pointer rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500">
          SIGNUP
        </div>
      </div>
    </div>
  )
}

export default Navbar
