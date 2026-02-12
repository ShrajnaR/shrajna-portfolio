import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="profile"
        className="hero-image"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Text + Buttons */}
      <motion.div
        className="hero-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span>Shrajna R</span>
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
          Software Engineer skilled in Java, Spring Boot, SQL, Docker, and
          Data Structures & Algorithms. Passionate about building scalable backend
          systems.
        </p>

        <div className="hero-buttons">
          <a href="/Shrajna_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
            View Resume
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Skills Loop */}
      <div className="skills-wrapper">
        <div className="skills-track">
          <div className="skill-card">React</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">Firebase</div>
          <div className="skill-card">Spring Boot</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">Docker</div>
          {/* Repeat for seamless scroll */}
          <div className="skill-card">React</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">Firebase</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
