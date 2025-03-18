import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        ☰
      </div>
      <ul
        className={isMobileMenuOpen ? styles.mobileMenu : ""}
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
      >
        <li>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
