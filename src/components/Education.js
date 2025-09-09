import React from 'react';

function Education() {
  return (
    <div className="card education-card">
      <h2>Education</h2>
      <div className="edu-row">
        <div>
          <div className="school">Cao Thang Technical College</div>
          <div className="period">09/2022 – 08/2025 • Information Technology</div>
        </div>
        <div className="gpa">
          <div className="gpa-label">GPA</div>
          <div className="gpa-value">7.75 / 10</div>
        </div>
      </div>

      <p class="edu-note">
        Key coursework: Data Structures &amp; Algorithms; Backend &amp; Web Development; Database Systems.
      </p>

    </div>
  );
}

export default Education;
