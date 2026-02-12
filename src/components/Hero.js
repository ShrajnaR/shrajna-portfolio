import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.img
        src={profile}
        alt="profile"
        className="hero-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="hero-content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span className="highlight">Shrajna R</span>
        </h1>

        <h3>
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

        <p>
          Software Engineer skilled in Java, Spring Boot, SQL, Docker, and Data
          Structures & Algorithms. Passionate about building scalable backend systems.
        </p>

        <div className="hero-buttons">
          <a href="/Shrajna_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
            View Resume
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const heroStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
};

const imgStyle = {
  width: "300px",
  height: "300px",
  objectFit: "cover",
  borderRadius: "50%",
  border: "4px solid #38bdf8",
  boxShadow: "0 0 40px rgba(56,189,248,0.6)",
};

const resumeButtonStyle = {
  display: "inline-block",
  marginTop: "20px",
  marginRight: "15px",
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
  marginTop: "20px",
  marginRight: "15px",
  padding: "12px 28px",
  borderRadius: "30px",
  border: "2px solid #38bdf8",
  color: "#38bdf8",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.3s",
};

export default Hero;
