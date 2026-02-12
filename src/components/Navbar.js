import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={menuOpen ? "mobile-menu-overlay active" : "mobile-menu-overlay"}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#experience" onClick={toggleMenu}>Experience</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
