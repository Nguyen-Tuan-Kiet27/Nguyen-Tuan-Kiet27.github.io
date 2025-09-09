function SoftSkills() {
  const skills = ["Teamwork", "Problem-solving", "Adaptability", "Communication"];
  return (
    <div className="card softskills-card">
      <h2>Soft Skills</h2>
      <ul>
        {skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
export default SoftSkills;
