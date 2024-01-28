import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Home/FooterSection'

interface OutletProps {
  children: ReactNode
}

const Outlet: React.FC<OutletProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <main className="relative w-full flex-1 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Outlet
