import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import logo from '../assets/spacex-logo.png';

function NavBar() {
  return (
    <nav className="navigation absolute w-full z-10 flex items-center justify-between px-16 py-5">
      <Link to="/">
        <div className="app-logo text-white flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678478055/spacex-logo_xy6kl8.png"
            alt=""
            className="logo w-[5rem] animate-wiggle"
          />
          <h2 className="logo uppercase font-bold text-2xl">Space Travelers Hub</h2>
        </div>
      </Link>
      <ul className="nav-links flex justify-evenly gap-10">
        <li>
          <NavLink
            to="rockets"
            className={`nav_link text-white text-2xl ${(isActive) => (isActive ? 'active' : '')}`}
            end
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="missions"
            className={`nav_link text-white text-2xl ${(isActive) => (isActive ? 'active' : '')}`}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="dragons"
            className={`nav_link text-white text-2xl ${(isActive) => (isActive ? 'active' : '')}`}
          >
            Dragons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile"
            className={`nav_link text-white text-2xl ${(isActive) => (isActive ? 'active' : '')}`}
          >
            My profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
