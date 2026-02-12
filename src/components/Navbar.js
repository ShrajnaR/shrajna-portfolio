const Navbar = () => {
  return (
    <nav style={navStyle}>
      <h2 style={logoStyle}>Portfolio</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 10%",
  position: "sticky",
  top: 0,
  backdropFilter: "blur(12px)",
  background: "rgba(15,23,42,0.6)",
  zIndex: 1000,
};


const logoStyle = {
  fontSize: "1.8rem",
  fontWeight: "600",
  letterSpacing: "1px",
  color: "#38bdf8"
};

export default Navbar;
