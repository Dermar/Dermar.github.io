import NavButton from "./NavButton.js";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navBar">
      <img src="../my face.jpg" alt="Marian Derias"/>
      <div className="buttonBar">
        <NavButton name="Home"/>
        <div className="navButton"><a href="../md-logo.png" download><button>Download my Resumé</button></a></div>
      </div>
    </nav>
    
  )
}

export default Navbar;
