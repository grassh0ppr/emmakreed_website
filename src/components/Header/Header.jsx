import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Brand from "./Brand";
import ColorToggle from "./ColorToggle";
import Hamburger from "./Hamburger";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className={isNavOpen ? "header nav-open" : "header"}>
      <Brand />
      <Nav setIsNavOpen={setIsNavOpen} />
      <Hamburger
        isNavOpen={isNavOpen}
        handleNavOpen={handleNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </header>
  );
}

function Nav({ setIsNavOpen }) {
  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <ColorToggle />
        <li>
          <NavLink
            to="about"
            className="main-nav-link"
            onClick={handleNavLinkClick}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className="main-nav-link"
            onClick={handleNavLinkClick}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className="main-nav-link"
            onClick={handleNavLinkClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
