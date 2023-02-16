import React from 'react'
import "../assets/styles/Navbar.css"
import AlejandroarraCV from "../assets/pdf/AlejandroarraCV.pdf"

export const Navbar = () => {
  return (
    <header>
    <nav className='navbar'>
        <div className='navbar-logo'>
            <h1>A</h1>
        </div>
        <div className='navbar-menu'>
            <a href='#about'><p>ABOUT</p></a>
            <a download="AlejandroarraCV" href={AlejandroarraCV}><p>RESUME</p></a>
            <a href='#solutions'><p>SOLUTIONS</p></a>
            <a href='#contact'><p>CONTACT</p></a>
        </div>
    </nav>
    </header>
  )
}
