import React from 'react';

function Projects() {
  const projects = [
    {
      title: "NovelNest",
      img: "/images/novelnest.png",
      link: "https://github.com/Nguyen-Tuan-Kiet27/WebsiteNovelNest",
      desc: "Online reading platform with multi-role system and payment integration.",
      tech: "Laravel, React, MySQL, OAuth, MoMo, VNPay"
    },
    {
      title: "PixelShop",
      img: "/images/pixelshop.png",
      link: "https://github.com/TellYaHeadliner/Pixel-Shop-Project",
      desc: "E-commerce app with product & order management, RESTful APIs.",
      tech: "Laravel, React, MySQL, VNPay"
    },
    {
      title: "Task Manager API",
      img: "/images/nodecrud.png",
      link: "https://github.com/Nguyen-Tuan-Kiet27/Task-Manager-API",
      desc: "Basic CRUD API with Node.js and Express, connected to MongoDB.",
      tech: "Node.js, Express, MongoDB"
    }
  ];

  return (
    <div className="card projects-card">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img alt={p.title} className="project-img" src={p.img} />
            <div className="project-content">
              <div className="project-head">
                <h3>{p.title}</h3>
                <a href={p.link} target="_blank" rel="noreferrer" className="small-link">View</a>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">{p.tech}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
