import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero">
      {/* IMAGE */}
      <motion.div
        className="hero-image"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="profile" style={imgStyle} />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="hero-text"
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
          Software Engineer skilled in Java, Spring Boot, SQL, Docker, and Data
          Structures & Algorithms. Passionate about building scalable backend systems.
        </p>

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
      </motion.div>
    </section>
  );
};

export default Hero;
