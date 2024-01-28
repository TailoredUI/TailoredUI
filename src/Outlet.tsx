import React, { ReactNode } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Home/FooterSection'

interface OutletProps {
  children: ReactNode
}

const Outlet: React.FC<OutletProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col">
      <Navbar />

      <main className="relative w-full overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  )
}

export default Outlet
