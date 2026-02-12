import {
  SiSpringboot, SiMysql, SiDocker, SiPython,
  SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiReact
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiReact />, name: "React" }
  ];

  return (
    <section id="skills" style={{ padding: "80px 0" }}>
      <h2>Skills</h2>
      <div className="skills-wrapper">
        <div className="skills-track">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
