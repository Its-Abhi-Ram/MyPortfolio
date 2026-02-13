import React, { useState, useRef, useEffect } from 'react';
import dcl from '../assets/DCL.png';
import rooman from '../assets/rooman-logo.jpeg';
import mit from '../assets/mit-logo.png';
import progton from '../assets/progton-logo.png';

const internships = [
  {
    img: dcl,
    title: 'Dhee Coding Lab',
    desc: 'Immersive training in Python, Java, MERN stack, and software testing with placement support.',
    details: `
      <section>
        <li><strong>Duration:</strong> (Feb 2025 - Present)</li>
        <li><strong>Location:</strong> Rajaji Nagar, Bengaluru</li>
        <li><strong>Focus:</strong> Real-time applied learning and hands-on projects</li>
      </section>
      <section>
        <h2>Tech Stack</h2>
        
          <li>Python and Programming in Python</li>
          <li>Django</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>

      </section>
      <section>
        <h2>Overview</h2>
        <p>  <li>
          Dhee Coding Lab provided a structured internship program focused on full-stack development and testing. The curriculum emphasized practical exposure through mini-projects, coding challenges, and mock interviews.
        </li>
        
        <li>And also which is focused on self development by making presentations and group discusions with mentors and group members.</li>

        <li>
          Here we can enhance skills through hands-on experience projects building and solving problems in presentation sessions. 
        </li>
        
        </p>
      </section>

   
    `
  },
  {
    img: rooman,
    title: 'Rooman Technologies',
    desc: 'Virtual internship in AI&ML, and IT infrastructure with project-based learning and certification.',
    details: `
      <section>
        <li><strong>Duration:</strong> 5 months(400 hours)</li>
        <li><strong>Role:</strong> AI&ML Intern</li>
      </section>
      <section>
        <h2>Tech Stack</h2>
        
          <li>Python</li>
          <li>SQL / NoSQL</li>
          <li>Linux</li>
          <li>Flask</li>
          <li>AI&ML</li>
        
      </section>
      <section>
        <h2>Overview</h2>
        <p>   <li>
        Internship involved learning things by the corparate employees through Online live sessions, weekly assessments, and Project. The program concluded with a recognized certification.
        </li>

        <li>
          This Internship WIINNR Program colabrated with VTU. and getting live sessions from the Rooman technologies, Wadhwani foundations, IIT Gauwati regarding soft skills and as well Technical skills like programming.
        </li>

        <li>
          This internship gives an hands-on experience by solving problems and assessments in a LMS portals.
        </li>
        
        
        
         </p>

      
      </section>
    `
  },
  {
    img: mit,
    title: 'MIT Academy',
    desc: 'Hands-on internship in robotics, automation, and AI through lab sessions and guided projects.',
    details: `
      <section>
        <li><strong>Duration:</strong> 1 month (November 2023)</li>
        <li><strong>Role:</strong> Full Stack web development</li>
      </section>
      <section>
        <h2>Tech Stack</h2>
        
          <li>HTML</li>
          <li>CSS</li>
          <li>Xampp server</li>
        
      </section>
      <section>
        <h2>Overview</h2>
        <p>Internship focused on basics of web development using html and css along with xampp server deploying projects. This internship helps to learn the web development skills and basic web page and forms creation.</p>
      </section>
    `
  },
  {
    img: progton,
    title: 'Progton Technologies',
    desc: 'Web development and cloud internship with enterprise-grade project contributions and backend integration.',
    details: `
      <section>
        <li><strong>Duration:</strong> 1 month (October - 2022)</li>
        <li><strong>Role:</strong> Java Intern</li>
      </section>
      <section>
        <h2>Tech Stack</h2>
      
          <li>Core Java</li>
        
      </section>
      <section>
        <h2>Overview</h2>
        <p>Internship involved learning core java concepts and by using core java building the small mini projects such as pizza bill generator and mini online banking system, in this we can create account , deposit amount, withdraw amount, last transaction.</p>
      </section>

      

      
    `
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
              <div className="intern-heading">
                <h3>{intern.title}</h3>
              </div>
              <div className="intern-info">{intern.desc}</div>
              <div className="buttons">
                <button onClick={() => setSelectedIntern(intern)}>Read More</button>
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
            <div
              style={{
                maxWidth: '700px',
                textAlign: 'justify',
                // lineHeight: '1.6'
              }}
              dangerouslySetInnerHTML={{ __html: selectedIntern.details }}
            />
            
          </div>
        )}
      </div>
      
    </section>
  );
}

export default Internship;
