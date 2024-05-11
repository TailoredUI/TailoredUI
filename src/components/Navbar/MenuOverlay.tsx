import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

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

  // Render the menu overlay
  return (
    <section>
      {/* AnimatePresence handles animations */}
      <AnimatePresence>
        {menuBarOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 mx-auto p-4 grid text-center gap-y-2 rounded-lg backdrop-blur-sm z-10 w-[90%] md:w-[95%] xl:w-[75%] grid-rows-3 md:hidden bg-gradient-to-r from-slate-600 to-transparent"
          >
            {/* Map through links to create navigation items */}
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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
