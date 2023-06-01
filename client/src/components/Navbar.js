import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to='/' >PowerGrade</Link>
    </nav>
  );
}

export default Navbar;
