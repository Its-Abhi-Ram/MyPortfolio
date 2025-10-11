import React from 'react';

const skillsData = [
  {
    category: "Backend Technologies",
    skills: [
      { icon: "bi-terminal", name: "Python" }
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      { icon: "bi-filetype-html", name: "HTML5" },
      { icon: "bi-filetype-css", name: "CSS3" },
      { icon: "bi-filetype-js", name: "JavaScript" },
      { icon: "bi-code-slash", name: "React Js" }
    ]
  },
  {
    category: "Web Frameworks",
    skills: [
      { icon: "bi-box", name: "Django" },
      { icon: "bi-box", name: "Flask" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { icon: "bi-database", name: "MySQL" },
      { icon: "bi-database-fill", name: "SQL" }
    ]
  },
  {
    category: "Core Competencies",
    skills: [
      { icon: "bi-cpu", name: "AIML" },
      { icon: "bi-code-slash", name: "DSA [List, String, Sorting]" },
      { icon: "bi-plug", name: "REST API" }
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { icon: "bi-git", name: "Git" },
      { icon: "bi-github", name: "GitHub" },
      { icon: "bi-code", name: "VS Code" }
    ]
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skill-container">
        <h1>Tech Stack</h1>
        <div className="skill-box">
          {skillsData.map((group, index) => (
            <div className="nth-skill" key={index}>
              <div className="skill-name">
                <h3>{group.category}</h3>
              </div>
              <div className="skills-list">
                {group.skills.map((skill, i) => (
                  <div className="skill" key={i}>
                    <i className={`bi ${skill.icon} skill-icon`}></i>
                    <p data-tooltip={`Skill: ${skill.name}`}>{skill.name}</p>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
