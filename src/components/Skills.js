import React from 'react';
import { FaJava, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiPostman, SiExpress } from 'react-icons/si';

function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Node.js", icon: <FaNodeJs /> }
      ]
    },
    {
      title: "Frameworks & Databases",
      skills: [
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL Server", icon: "/sql-database-generic-svgrepo-com.svg" }, // ảnh custom trong public
        { name: "MongoDB (basic)", icon: <SiMongodb /> },
        { name: "RESTful API", icon: <SiExpress /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Postman", icon: <SiPostman /> }
      ]
    }
  ];

  return (
    <div className="card skills-card">
      <h2>Skills</h2>
      {categories.map((cat, i) => (
        <div key={i} className="skills-group">
          <h3>{cat.title}</h3>
          <div className="skills-grid">
            {cat.skills.map((s, j) => (
              <div key={j} className="skill-pill">
                {typeof s.icon === "string" ? (
                  <img 
                    src={s.icon} 
                    alt={s.name} 
                    width="20" 
                    height="20" 
                    className="icon"
                  />
                ) : (
                  <span className="icon">{s.icon}</span>
                )}
                {s.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
