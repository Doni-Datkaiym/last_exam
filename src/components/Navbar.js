import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <Link to="/" class="navbar-brand">CINEMA</Link>
        <form class="d-flex">

        

          <li className="nav-item">
            <NavLink to="/About" exact className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contacts" exact className="nav-link">Contacts</NavLink>
          </li>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;