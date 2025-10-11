import React, { useState, useRef, useEffect } from 'react';
import pentagon from '../assets/pentagon-logo.png';
import rooman from '../assets/rooman-logo.jpeg';
import mit from '../assets/mit-logo.png';
import progton from '../assets/progton-logo.png';

const internships = [
  {
    img: pentagon,
    title: "Pentagon Space",
    desc: "Pentagon Space is a Bengaluru-based training institute offering immersive programs in Python, Java, MERN stack, and software testing. With a focus on real-time applied learning and 100% placement support, it equips students with industry-relevant skills through expert-led sessions and hands-on projects.",
    details: `
      <section>
        <li>
        </li>
      </section>
          `
  },
  {
    img: rooman,
    title: "Rooman Technologies",
    desc: "Rooman Technologies offers virtual, project-based internships aligned with emerging technologies. Their programs are designed to build real-world skills in IT infrastructure, AI&ML, supported by expert mentorship and recognized certifications.",
    details: "Internship Role: AI Data Analyst & Network Intern. Interns work on live projects involving Python, SQL/NoSQL, Linux, Flask, Power BI, and machine learning. The program includes weekly assessments, career guidance, and placement assistance, with certification upon successful completion."
  },
  {
    img: mit,
    title: "MIT Academy",
    desc: "MIT Academy offers diverse internship opportunities through its departments and centers, including robotics, automation, and AI. These programs combine lectures, lab sessions, and mini-projects to foster innovation and technical expertise.",
    details: "Internship Role: AI & Robotics Intern. Interns participate in hands-on lab work, case studies, and guided projects focused on automation, machine learning, and data analysis. The program includes certification and is open to engineering students from affiliated universities."
  },
  {
    img: progton,
    title: "Progton Technologies",
    desc: "Progton Technologies specializes in custom web and mobile development, cloud services, and AI-driven solutions. Their internship programs foster creativity and technical excellence in modern frameworks and scalable architectures.",
    details: "Internship Role: Web Development & Cloud Intern. Interns contribute to enterprise-grade applications using React, Ruby on Rails, and AWS. The program emphasizes performance optimization, UI/UX design, and backend integration, preparing interns for full-stack roles in dynamic industries."
  }
];


function Internship() {
  const [selectedIntern, setSelectedIntern] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (selectedIntern && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
