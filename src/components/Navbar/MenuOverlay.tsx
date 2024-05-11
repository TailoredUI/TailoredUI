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
            className="grid grid-rows-3 md:hidden absolute text-center gap-y-2 z-10 left-0 right-0 mx-auto w-[90%] rounded-lg bg-gradient-to-r from-slate-600 to-transparent p-4 backdrop-blur-sm md:w-[95%] xl:w-[75%]"
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
