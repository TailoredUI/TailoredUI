import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <>
      <nav className="bg-gradient-to-r from-slate-600 to-transparent p-4 absolute top-4 left-1/2 -translate-x-1/2 w-[90%] xl:w-[75%] z-10 rounded-lg backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FFF"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
              />
            </svg>

            <span className="text-white text-lg font-bold">TailorUI</span>
          </div>

          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className="text-white hover:text-gray-300">
              Component
            </NavLink>
            <NavLink to="/template" className="text-white hover:text-gray-300">
              Template
            </NavLink>
            <NavLink to="/docs" className="text-white hover:text-gray-300">
              Docs
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="text-white mr-4 cursor-pointer"
              onClick={handleSearchIconClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FFF"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>

            {/* Github icon */}
            <span className="hidden xl:inline-flex">
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
                className="w-8 h-8 cursor-pointer bg-gray-800 rounded-full p-1"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </span>

            <button className="bg-blue-500 text-white px-8 py-2 ml-4 rounded-md hidden md:inline-block">
              Get Started
            </button>
            <div className="md:hidden">
              <button className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Modal
        isOpen={isSearchVisible}
        onRequestClose={() => setIsSearchVisible(false)}
        className="w-min m-auto translate-y-16 shadow-md"
        overlayClassName="bg-[#FFFFFF2A] w-screen h-screen absolute top-0 z-50 backdrop-blur-sm"
      >
        <div className="flex relative">
          <input
            type="text"
            className="rounded-md p-4 border-none outline-none focus:border-none focus:outline-none m-auto pr-10 text-black"
            placeholder="Search something..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="gray"
            className="w-6 h-6 absolute top-1/2 -translate-y-1/2 right-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
