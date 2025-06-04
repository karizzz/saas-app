import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import  NavItems  from './NavItems'
/**
 * Navbar component
 * 
 * This component represents the navigation bar of the application.
 * It contains a logo that links to the home page.
 */

const Navbar = () => {
  return (
    <nav className="navbar flex items ">
      {/* Link to the home page */}
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          {/* Logo image */}
          <Image src="/images/logo.svg" alt="logo" width={47} height={45} />
        </div>
      </Link>

      <div className = "flex items-center gap-8">
        <NavItems />
        <p>Sign In</p>
        
       
      </div>
    </nav>
  )
}

export default Navbar