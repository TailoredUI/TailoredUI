import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Home/FooterSection'

interface OutletProps {
  children: ReactNode
}

const Outlet: React.FC<OutletProps> = ({ children }) => {
  const location = useLocation()
  const isEditorRoute = location.pathname === '/editor'

  return (
    <>
      {!isEditorRoute ? (
        <div className="flex w-full flex-col">
          <Navbar />
          <main className="relative mx-4 min-h-[calc(100vh-6rem)] overflow-x-hidden sm:mx-8 xl:mx-64">
            {children}
          </main>
          <Footer />
        </div>
      ) : (
        <div>
          <main className="relative overflow-x-hidden">{children}</main>
        </div>
      )}
    </>
  )
}

export default Outlet
