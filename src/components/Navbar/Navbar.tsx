import { useState, useEffect, ChangeEventHandler } from 'react'
import { NavLink } from 'react-router-dom'

import Modal from 'react-modal'
import { easeOut, motion } from 'framer-motion'
import { componentsList } from '../../utils/constant/values'
import { Component } from '../../utils/types/types'
import TailoredUIIcon from '../../assets/images/icons/TailoredUI.icon'

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [searchedValue, setSearchedValue] = useState<string>('')
  const [results, setResults] = useState<Component[]>([])

  useEffect(() => {
    if (searchedValue != '') {
      const filteredResults = componentsList.filter((component) =>
        component.name.toLowerCase().includes(searchedValue.toLowerCase())
      )
      setResults(filteredResults)
    } else {
      setResults([])
    }
  }, [searchedValue])

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchedValue(event.target.value)
  }

  const handleSearchIconClick = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  useEffect(() => {
    if (isSearchVisible) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
      setResults([])
      setSearchedValue('')
    }
  }, [isSearchVisible])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: easeOut }}
    >
      <nav className="relative z-10 m-auto my-4 w-[90%] rounded-lg bg-gradient-to-r from-slate-600 to-transparent p-4 backdrop-blur-sm md:w-[95%] xl:w-[75%]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -270 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: easeOut }}
            >
              <TailoredUIIcon className="h-10 w-10" />
            </motion.div>
            <span className="text-lg font-bold text-white">TailoredUI</span>
          </div>

          <div className="hidden space-x-4 md:flex">
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
              className="mr-4 cursor-pointer text-white"
              onClick={handleSearchIconClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FFF"
                className="h-6 w-6"
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
              <a
                href="https://github.com/TailoredUI/TailoredUI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="black"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 cursor-pointer rounded-full bg-white p-1 transition-all duration-200 hover:bg-black hover:stroke-white"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </span>

            <button className="ml-4 hidden rounded-md bg-blue-500 px-8 py-2 text-white md:inline-block">
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
        className="m-auto w-min translate-y-16 shadow-md outline-none"
        overlayClassName="bg-[#FFFFFF2A] w-screen h-screen absolute top-0 z-50 backdrop-blur-sm"
      >
        <div className="relative flex">
          <input
            type="text"
            className={`m-auto w-[18rem] border-none p-4 pr-10 text-black outline-none focus:border-none focus:outline-none  xs:w-min ${
              searchedValue ? 'rounded-t-md' : 'rounded-md'
            }`}
            autoFocus={true}
            placeholder="Search something..."
            value={searchedValue}
            onChange={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="gray"
            className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        {results.length === 0 ? (
          searchedValue && (
            <motion.li
              initial={{ opacity: 0, y: '-10%' }}
              animate={{ opacity: 1, y: '0' }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="flex items-center justify-between divide-y divide-slate-200 overflow-y-auto rounded-b-md border-t border-slate-200 bg-current p-4"
            >
              <span className="whitespace-nowrap font-semibold text-slate-900">
                No Results Found
              </span>
            </motion.li>
          )
        ) : (
          <motion.ul
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="max-h-[20rem] divide-y divide-slate-200 overflow-y-auto rounded-b-md border-t border-slate-200 bg-current text-sm leading-6 xs:max-h-[25rem]"
          >
            {results.map((component, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-between p-4"
              >
                <span className="whitespace-nowrap font-semibold text-slate-900">
                  {component.name}
                </span>
                <span className="ml-4 text-right text-xs text-slate-600">
                  {component.path}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </Modal>
    </motion.div>
  )
}

export default Navbar
