import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "SDE Intern",
      company: "Wissen Technology",
      duration: "May 2025 – Jan 2026",
      certificate: "/Wissen_Internship_Certificate.pdf",
      points: [
        "Developed backend services and REST APIs using Spring Boot and MySQL.",
        "Designed efficient database schemas and optimized queries.",
        "Deployed applications using Docker and Nginx.",
        "Managed version control using Git."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Abhimo Technologies Pvt. Ltd.",
      duration: "Feb 2025 – May 2025",
      certificate: "/Abhimo_Internship_Certificate.pdf",
      points: [
        "Built responsive websites using HTML, CSS, and JavaScript.",
        "Improved UI layout and usability.",
        "Implemented interactive UI features."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="experience-header">
              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </div>

              <span className="experience-duration">
                {exp.duration}
              </span>
            </div>

            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* View Certificate */}
            <a
              href={exp.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
