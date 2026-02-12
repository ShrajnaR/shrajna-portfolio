import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>

        <div className="nav-links-desktop">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="menu-icon" onClick={() => setOpen(true)}>
          ☰
        </div>
      </nav>

      {/* BLUR OVERLAY */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <span className="close-icon" onClick={() => setOpen(false)}>✕</span>

        <a onClick={() => setOpen(false)} href="#skills">Skills</a>
        <a onClick={() => setOpen(false)} href="#experience">Experience</a>
        <a onClick={() => setOpen(false)} href="#projects">Projects</a>
        <a onClick={() => setOpen(false)} href="#contact">Contact</a>
      </div>
    </>
  );
};

export default Navbar;
