import React, { useState, useRef, useEffect } from 'react';
import pentagon from '../assets/pentagon-logo.png';
import rooman from '../assets/rooman-logo.jpeg';
import mit from '../assets/mit-logo.png';
import progton from '../assets/progton-logo.png';

const internships = [
  
  {
    img: pentagon,
    title: "Pentagon Space",
    desc: "Pentagon Space empowers professionals with upskilling and mastering in technologies at affordable prices. With innovative trainers and industry-relevant courses, it simplifies complex concepts and prepares learners for the future. Backed by strong placement support, Pentagon-space bridges the gap between knowledge and carrer growth.",
    details: "Python Full-Stack Developer Intern"
  },
  {
    img: rooman,
    title: "Rooman Technologies",
    desc: "Rooman Technologies specializes in IT infrastructure and networking internships.",
    details: "Interns at Rooman Technologies gain experience in network setup, cybersecurity, and cloud computing. The program includes workshops, certifications, and practical assignments."
  },
  {
    img: mit,
    title: "MIT Academy",
    desc: "MIT Academy offers internships in data science and artificial intelligence.",
    details: "MIT Academy's internship covers machine learning, data analysis, and AI model deployment. Interns collaborate on research projects and receive guidance from industry experts."
  },
  {
    img: progton,
    title: "Progton Technologies",
    desc: "Progton Technologies focuses on web development and UI/UX design internships.",
    details: "At Progton Technologies, interns work on modern web applications, learn about responsive design, and contribute to UI/UX improvements. The program emphasizes creativity and teamwork."
  }
];

function Internship() {
  const [selectedIntern, setSelectedIntern] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (selectedIntern && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedIntern]);

  return (
    <section id="internship" className="internship-section">
      <div className="intern-container">
        <h1>Internships</h1>
        <div className="internship-box">
          {internships.map((intern, index) => (
            <div className="intern-com" key={index}>
              <div className="intern-img">
                <img src={intern.img} alt={intern.title} />
              </div>
              <div className="intern-heading">{intern.title}</div>
              <div className="intern-info">{intern.desc}</div>
              <div className="buttons">
                <button onClick={() => setSelectedIntern(intern)}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedIntern && (
          <div
            ref={detailsRef}
            className="intern-details-container"
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
              onClick={() => setSelectedIntern(null)}
            >
              Close
            </button>
            <img
              src={selectedIntern.img}
              alt={selectedIntern.title}
              style={{ maxWidth: '200px', marginBottom: '1rem' }}
            />
            <h2>{selectedIntern.title}</h2>
            <p style={{ maxWidth: '600px', textAlign: 'center' }}>
              {selectedIntern.details}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Internship;
