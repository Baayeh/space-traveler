import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (

    <div className="nav_header_container">
      <h2 className="logo">Space Travelers Hub</h2>

      <nav className="nav_items">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav_link">Rockets</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/calculator" className="nav_link">Missions</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/quote" className="nav_link">My profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
