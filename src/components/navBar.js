import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav_header_container">
      <h2 className="logo">Space Travelers Hub</h2>

      <nav className="nav_items">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={`nav_link ${(isActive) => (isActive ? 'active' : '')}`}
              end
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="missions"
              className={`nav_link ${(isActive) => (isActive ? 'active' : '')}`}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={`nav_link ${(isActive) => (isActive ? 'active' : '')}`}
            >
              My profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
