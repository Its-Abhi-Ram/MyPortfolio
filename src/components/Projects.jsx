import React, { useState, useRef, useEffect } from 'react';
import iot from '../assets/iot-crs-logo.png';
import spam from '../assets/emial-spam-logo.png';
import bank from '../assets/bank-logo.png';

const projectsData = [
  {
    img: iot,
    title: "An IOT based CRS based on ML",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    details: "Detailed information about the IOT based CRS project using ML."
  },
  {
    img: spam,
    title: "Email Spam Detection using ML",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    details: "Detailed information about the Email Spam Detection project using ML."
  },
  {
    img: bank,
    title: "Banking system using Core JAVA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    details: "Detailed information about the Banking system project using Core JAVA."
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (selectedProject && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="project-section">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="project-box">
          {projectsData.map((project, index) => (
            <div className="nth-project" key={index}>
              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-name">
                <h3>{project.title}</h3>
              </div>
              <div className="project-info">{project.desc}</div>
              <div className="buttons">
                <button onClick={() => setSelectedProject(project)}>
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div
            ref={detailsRef}
            className="project-details-container"
            style={{
              width: '100%',
              minHeight: '100vh',
              background: '#f9f9f9',
              marginTop: '2rem',
              padding: '2rem',
              boxSizing: 'border-box',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              style={{ maxWidth: '200px', marginBottom: '1rem' }}
            />
            <h2>{selectedProject.title}</h2>
            <p style={{ maxWidth: '600px', textAlign: 'center' }}>
              {selectedProject.details}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
