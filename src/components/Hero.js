import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section style={heroStyle}>
      {/* Text + Buttons */}
      <motion.div
        style={textContainerStyle}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 style={{ fontSize: "3rem" }}>
          Hi, I'm <span style={{ color: "#38bdf8" }}>Shrajna R</span>
        </h1>

        <h3 style={{ marginTop: "20px" }}>
          <ReactTyped
            strings={[
              "Java Backend Developer",
              "Effective Learner",
              "Tech Enthusiast",
              "Problem Solver",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h3>

        <p style={{ marginTop: "20px", maxWidth: "500px" }}>
          Software Engineer skilled in Java, Spring Boot, SQL, Docker, and
          Data Structures & Algorithms. Passionate about building scalable backend
          systems.
        </p>

        <div style={buttonsWrapperStyle}>
          <a
            href="/Shrajna_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={resumeButtonStyle}
          >
            View Resume
          </a>

          <a href="#contact" style={contactButtonStyle}>
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="profile"
        style={imgStyle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Skills Loop */}
      <div className="skills-wrapper" style={{ marginTop: "40px", width: "100%" }}>
        <div className="skills-track">
          <div className="skill-card">React</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">Firebase</div>
          <div className="skill-card">Spring Boot</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">Docker</div>
          {/* Repeat skills for seamless scrolling */}
          <div className="skill-card">React</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">Firebase</div>
        </div>
      </div>
    </section>
  );
};

// Hero section styles
const heroStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2rem",
};

// Text container
const textContainerStyle = {
  display: "flex",
  flexDirection: "column",
  order: 2, // desktop: text comes second
  flex: 1,
};

// Profile image
const imgStyle = {
  width: "300px",
  height: "300px",
  objectFit: "cover",
  borderRadius: "50%",
  border: "4px solid #38bdf8",
  boxShadow: "0 0 40px rgba(56,189,248,0.6)",
  order: 1, // desktop: image first
};

// Buttons wrapper
const buttonsWrapperStyle = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
  marginTop: "20px",
};

// Buttons
const resumeButtonStyle = {
  display: "inline-block",
  padding: "12px 28px",
  borderRadius: "30px",
  border: "2px solid #38bdf8",
  color: "#38bdf8",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.3s",
};

const contactButtonStyle = {
  display: "inline-block",
  padding: "12px 28px",
  borderRadius: "30px",
  border: "2px solid #38bdf8",
  color: "#38bdf8",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.3s",
};

export default Hero;
