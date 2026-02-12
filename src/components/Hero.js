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
        <img src={profile} alt="profile" className="hero-img" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="hero-text"
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
          Software Engineer skilled in Java, Spring Boot, SQL, Docker, and
          Data Structures & Algorithms.
        </p>

        <div className="hero-buttons">
          <a href="/Shrajna_Resume.pdf" className="btn-outline" target="_blank">
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

export default Hero;
