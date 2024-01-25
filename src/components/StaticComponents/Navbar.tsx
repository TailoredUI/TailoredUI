const Navbar = () => {
  return (
    <div className="rounded-lg px-8 py-4 text-gray-500 flex justify-between gap-[2rem] lg:gap-16 2xl:gap-0 items-center absolute -top-4 right-4 w-max xl:w-1/2 bg-white shadow-thin">
      <div className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
        </svg>
        <span className="font-bold">TailoredUI</span>
      </div>
      <div className="gap-2 hidden md:flex">
        <span>HOME</span>
        <span>CONTACT</span>
        <span>ABOUT US</span>
      </div>
      <div className="hidden sm:flex gap-2">
        <div className="py-2 px-4 rounded-md border-2 border-gray-400 cursor-pointer hover:bg-slate-300">
          LOGIN
        </div>
        <div className="py-2 px-4 rounded-md bg-blue-400 cursor-pointer hover:bg-blue-500 text-white flex vertical">
          SIGNUP
        </div>
      </div>
    </div>
  );
};

export default Navbar;
