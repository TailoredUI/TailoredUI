import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Home/FooterSection'

interface OutletProps {
  children: ReactNode
}

const Outlet: React.FC<OutletProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full relative overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Outlet
