import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div style={{ display: "grid", gap: "30px" }}>
        
        {/* RTTM Admin Tool */}
        <div className="card">
          <h3>RTTM Admin Tool</h3>
          <p>
            A microservices-based administrative platform built using 
            Spring Boot and Eureka Server for service discovery. 
            Integrated MySQL and MongoDB for structured and unstructured data, 
            containerized with Docker for scalable deployment.
          </p>

          <a
            href="https://github.com/ShrajnaR/RTTM-Admin-Tool"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <FaGithub style={{ marginRight: "8px" }} />
            View on GitHub
          </a>
        </div>

        {/* Movie Booking System */}
        <div className="card">
          <h3>Movie Booking System</h3>
          <p>
            A backend-driven movie ticket booking system developed using 
            Spring Boot and MySQL. Implemented REST APIs for booking workflows, 
            authentication, and seat management. Deployed with Docker and 
            configured Nginx for load balancing.
          </p>

          <a
            href="https://github.com/ShrajnaR/Movie-Booking"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <FaGithub style={{ marginRight: "8px" }} />
            View on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
