import React, { useState, useRef, useEffect } from 'react';
import iot from '../assets/iot-crs-logo.png';
import spam from '../assets/emial-spam-logo.png';
import bank from '../assets/bank-logo.png';

const projectsData = [
  {
    img: iot,
    title: "An IoT-based CRS Using ML",
    desc: "A smart complaint redressal system leveraging IoT and machine learning for efficient issue tracking.",
    details: `
      <section>
        <li><strong>Role : </strong>Developer and Team Leader </li>
        <li><strong>Duration : </strong>3 months</li>
        <li><strong>Team : </strong>4 members </li>
      </section>
      <section>
        <h4>Tech Stack</h4>
        <ul>
          <li><strong>Backend:</strong> Python</li>
          <li><strong>Framework:</strong> Flask</li>
          <li><strong>Frontend:</strong> HTML, CSS</li>
        </ul>
        
      </section>
      <section>
        <h4>Overview</h4>
        <p>This project integrates IoT sensors with a machine learning model to automate recommendation to formers about the suitable crop for yield in specific lands.</p>
      </section>
      <section>
        <h4>Problem</h4>
        <p>One of the key problems that farmers in agriculture face, is how to decide the appropriate  
crop to be cultivated in a particular season. This choice depends on various criteria like type  
of soil, climatic conditions, and availability of resources and commercial demand. A false  
selection can result in suboptimal yields, loss of revenue and damage to the environment. At  
present, the majority of farmers are using local knowledges and assumptions that might not be  
appropriate because 
26
 26
 it 
does 
not 
consider 
the frequent changes in agro-ecosystems due to climate 
change, soil degradation, and changing market environment. </p>
      </section>
      <section>
        <h4>Solution</h4>
        <p>IoT-based crop recommendation system aims to provide farmers with  
intelligent crop suggestions by leveraging real-time environmental and soil data. A network of  
IoT sensors is deployed in the agricultural field to monitor real-time parameters, including soil  
humidity, temperature, pH and NPK levels in soil. A machine learning model is developed to  
recommend suitable crops to get more yield.</p>
      </section>
      <section>
        <h4>Architecture / Workflow</h4>
        <p> <ul> <li>  
At the core of the system is the Input Unit, which includes sensors for detecting soil pH, soil  
nutrients (Nitrogen, Phosphorus, and Potassium), temperature, and humidity.</li> 
<li> These parameters  
are transmitted to the Control Unit, which comprises a GSM module and a microcontroller.  
The control unit collects and processes the sensor data and communicates it over the internet.  </li>
<li>It also integrates real-time weather information such as temperature, precipitation, and wind  
through a Weather Forecast API.</li>
<li> All collected and external data is transmitted to the Cloud  
Unit, which includes a database and software that handle data storage and processing.</li> 
<li>The  
cloud system performs crop prediction based on the analysed data and provides crop  
recommendations using an expert system.</li>
</p>
      </section>

    `
  },
  {
    img: spam,
    title: "Email Spam Detection using ML",
    desc: "A machine learning model to classify and filter spam emails with high accuracy.",
    details: `
      <section>
      <li><strong>Role : </strong>Developer and Team Leader</li>
      <li><strong>Duration : </strong>1 month</li>
      <li><strong>Team : </strong>4 members</li>
      </section>
      <section>
        <h4>Tech Stack</h4>
        <ul>
          <li><strong>Language:</strong> Python</li>
          <li><strong>Libraries:</strong> Scikit-learn, Pandas, NumPy</li>
        </ul>
      </section>
      <section>
        <h4>Overview</h4>
        <p>This project uses supervised learning techniques to detect spam emails based on content features and metadata.</p>
      </section>
      <section>
      <h4>Problem</h4>
      <p>Technological advances are accelerating the dissemination of information. 
Today, millions of devices and their users are connected to the Internet, allowing 
businesses to interact with consumers regardless of geography. People all over the 
world send and receive emails every day. Email is an effective, simple, fast, and cheap 
way to communicate. It can be divided into two types of emails: spam and ham. More 
than half of the letters received by the user – spam.</p>
      </section>
      <section>
      <h4>Solution</h4>
      <p>Naive Bayes is a probabilistic classifier that uses Bayes' Theorem to predict the 
probability that an email belongs to a particular class (spam or non-spam).It assumes that the 
presence of a particular feature in an email is independent of the presence of any other feature, 
which simplifies the computation. It is highly effective for text classification tasks, such as 
spam detection, because it works well with word frequencies and other text-based features. It 
calculates the probability of an email being spam based on the frequency of words and phrases that appear in known spam emails.</p>
      </section>
    `
  },
  {
    img: bank,
    title: "Banking System using Core JAVA",
    desc: "A secure and scalable banking system built with Java for managing customer accounts and transactions.",
    details: `
      <section>
      <li><strong>Role : </strong>Developer</li>
      <li><strong>Duration : </strong>1 week</li>
      <li><strong>Team : </strong>1 member</li>
      </section>
      <section>
        <h4>Tech Stack</h4>
        <ul>
          <li><strong>Language:</strong> Core Java</li>
        </ul>
      </section>
      <section>
        <h4>Overview</h4>
        <p>This system supports account creation, fund transfers(credit, debit), along with balance enquery and transaction history robust error handling and validation.</p>
      </section>
      
    `
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
            <div
              style={{ maxWidth: '700px', textAlign: 'left' }}
              dangerouslySetInnerHTML={{ __html: selectedProject.details }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
