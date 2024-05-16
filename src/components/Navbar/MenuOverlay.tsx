import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CloseIcon } from '../../assets/images/icons/NavBar.icons'
import { useEffect } from 'react'

// Define the props interface for MenuOverlay component
interface MenuOverlayProps {
  menuBarOpen: boolean
  setMenuBarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// Define the navigation links
const links = [
  {
    title: 'Component',
    to: '/',
  },
  {
    title: 'Template',
    to: '/Template',
  },
  {
    title: 'Docs',
    to: '/Docs',
  },
]

// MenuOverlay component definition
const MenuOverlay: React.FC<MenuOverlayProps> = ({
  menuBarOpen,
  setMenuBarOpen,
}) => {
  // Handler to close the menu
  const handleClick = () => {
    setMenuBarOpen(false)
  }

  useEffect(() => {
    if (menuBarOpen) {
      document.body.style.overflow = 'hidden' // Disable scroll
      document.body.style.height = '100vh' // Lock the body height
    } else {
      document.body.style.overflow = 'auto' // Enable scroll
      document.body.style.height = 'auto' // Unlock the body height
    }
  }, [menuBarOpen])

  // Render the menu overlay
  return (
    <section>
      {/* AnimatePresence handles animations */}
      <AnimatePresence>
        {menuBarOpen && (
          /* eslint-disable */
          <motion.ul
            initial={{ x: -100 }} // Start position outside the screen on the left
            animate={{ x: 0 }} // Slide in from the left
            exit={{ x: -100 }} // Slide out to the left
            transition={{ duration: 0.5 }}
            className="fixed insert-0 h-full w-screen flex flex-col justify-center items-center gap-y-16 backdrop-blur-sm z-30 md:hidden bg-gradient-to-r from-slate-600 to-transparent text-center p-4"
          >
            <button
              className="text-white absolute top-9 right-8"
              onClick={() => {
                setMenuBarOpen(false)
              }}
            >
              <CloseIcon />
            </button>
            {/* Map through links to create navigation items */}
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ x: -100 }} // Start position outside the screen on the left
                animate={{ x: 0 }} // Slide in from the left
                exit={{ x: -100 }} // Slide out to the left
                transition={{ duration: 0.3, delay: index * 0.01 }}
              >
                {/* Navigation links */}
                <NavLink
                  to={link.to}
                  className="block text-white hover:text-gray-300"
                  onClick={handleClick}
                >
                  {link.title}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  )
}

export default MenuOverlay
