import React from 'react';
import { FaJava, FaNodeJs, FaGitAlt, FaPhp, FaLaravel, FaLock, } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiPostman, SiExpress, SiJira } from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { BsFillShieldLockFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { BiLogoSpringBoot } from "react-icons/bi";

function Skills() {
  // const categories = [
  //   {
  //     title: "Programming Languages",
  //     skills: [
  //       { name: "Java", icon: <FaJava /> },
  //       { name: "Node.js", icon: <FaNodeJs /> }
  //     ]
  //   },
  //   {
  //     title: "Frameworks & Databases",
  //     skills: [
  //       { name: "Express", icon: <SiExpress /> },
  //       { name: "MySQL", icon: <SiMysql /> },
  //       { name: "SQL Server", icon: "/sql-database-generic-svgrepo-com.svg" }, // ảnh custom trong public
  //       { name: "MongoDB (basic)", icon: <SiMongodb /> },
  //       { name: "RESTful API", icon: <SiExpress /> },
  //       { name: "JWT", icon: <SiExpress /> },
  //       { name: "bcrypt", icon: <SiExpress /> },
  //       { name: "Jira/Confluence (familiar)", icon: <SiExpress /> },
  //       { name: "CI/CD (basic)", icon: <SiExpress /> },
  //     ]
  //   },
  //   {
  //     title: "Tools",
  //     skills: [
  //       { name: "Git", icon: <FaGitAlt /> },
  //       { name: "Postman", icon: <SiPostman /> }
  //     ]
  //   }
  // ];
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "PHP", icon: <FaPhp  /> },
        { name: "Java", icon: <FaJava /> },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Laravel", icon: <FaLaravel/> },
        { name: "Spring Boot", icon: <BiLogoSpringBoot /> },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQLServer", icon: <DiMsqlServer /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "API & Security",
      skills: [
        { name: "RESTful API", icon: <TbApi/> },
        { name: "JWT", icon: <FaLock/> },
        { name: "bcrypt", icon: <BsFillShieldLockFill/> }
      ]
    },
    {
      title: "Collaboration & DevOps",
      skills: [
        { name: "Jira/Confluence", icon: <SiJira /> },
        { name: "CI/CD", icon: <CiSettings /> }
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
