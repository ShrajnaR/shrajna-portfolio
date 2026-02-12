import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* IMAGE FIRST */}
        <motion.img
          src={profile}
          alt="Shrajna R"
          className="hero-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* TEXT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ x: -80, opacity: 0 }}
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
                "Spring Boot Developer",
                "Problem Solver",
                "Tech Enthusiast",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h3>

          <p>
            Software Engineer skilled in Java, Spring Boot, SQL, Docker,
            and Data Structures & Algorithms. Passionate about building
            scalable backend systems.
          </p>

          <div className="hero-buttons">
            <a
              href="/Shrajna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Resume
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
