import React from 'react';

function Activities() {
  const activities = [
    {
      title: "Olympiad in Informatics (2023)",
      desc: "Practiced algorithms and data structures under competitive conditions."
    },
    {
      title: "College IT Workshops & Seminars (2022–2024)",
      desc: "Improved teamwork and technical skills through coding sessions and discussions with peers."
    }
  ];

  return (
    <div className="card activities-card">
      <h2>Activities</h2>
      <div className="activities-list">
        {activities.map((a, index) => (
          <div key={index} className="activity-item">
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
