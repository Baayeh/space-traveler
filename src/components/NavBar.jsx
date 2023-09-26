/* eslint-disable comma-dangle */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', changeNavColor);

  return (
    <nav
      className={`${
        scrolled ? 'scrolled' : ''
      } navigation fixed top-0 w-full z-10 flex items-center justify-between px-16 py-5 transition-colors duration-300 ease-in-out`}
    >
      <Link to="/">
        <div className="app-logo text-white flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1678478055/spacex-logo_xy6kl8.png"
            alt=""
            className="logo w-[5rem] animate-wiggle"
          />
          <h2 className="logo uppercase font-bold text-2xl">
            Space Travelers Hub
          </h2>
        </div>
      </Link>
      <ul className="nav-links flex justify-evenly gap-10">
        <li>
          <NavLink
            to="capsules"
            className={`text-white border border-slate-400/70 p-2 rounded-md sm:text-xl hover:bg-slate-400/30 transition-colors duration-300 ease-in-out ${(
              isActive
            ) => (isActive ? 'active' : '')}`}
            end
          >
            Capsules
          </NavLink>
        </li>
        <li>
          <NavLink
            to="rockets"
            className={`text-white border border-slate-400/70 p-2 rounded-md sm:text-xl hover:bg-slate-400/30 transition-colors duration-300 ease-in-out ${(
              isActive
            ) => (isActive ? 'active' : '')}`}
            end
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="missions"
            className={`text-white border border-slate-400/70 p-2 rounded-md sm:text-xl hover:bg-slate-400/30 transition-colors duration-300 ease-in-out ${(
              isActive
            ) => (isActive ? 'active' : '')}`}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile"
            className={`text-white border border-slate-400/70 p-2 rounded-md sm:text-xl hover:bg-slate-400/30 transition-colors duration-300 ease-in-out ${(
              isActive
            ) => (isActive ? 'active' : '')}`}
          >
            My profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
