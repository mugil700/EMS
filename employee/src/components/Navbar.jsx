import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Employee</Link></li>
        <li><Link to="/Edit">Edit Employee</Link></li>
        <li><Link to="/details">Employee Details</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;