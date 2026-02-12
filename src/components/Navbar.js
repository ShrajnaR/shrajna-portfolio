import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={navStyle}>
        <h2 style={{ color: "#38bdf8" }}>Portfolio</h2>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile menu icon */}
        <div className="menu-icon" onClick={() => setOpen(true)}>
          ☰
        </div>
      </nav>

      {/* Overlay */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}

      {/* Mobile side menu */}
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

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 10%",
  position: "sticky",
  top: 0,
  backdropFilter: "blur(12px)",
  background: "rgba(15,23,42,0.6)",
  zIndex: 1000,
};

export default Navbar;
