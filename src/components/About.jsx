import React from 'react';
import profile from '../assets/profile2.jpg'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="profile-img" style={{display:"flex", justifyContent:'center'}}>
            <img src={profile} alt="Profile" />
        </div>
        <div className="about-box">
          <p>
            Hi, I'm Abhi from Kolar. I'm a recently graduated in C. Byregowda Institute of Technology of branch Computer Science and Engineering from VTU and also I'm secured with 8.52 CGPA. I'm good at technical skills like <strong>Python programming,  Django framework, SQL and Web Technlogies like HTML, CSS , JS and React js 
              </strong> and having experience of <strong>git, github and VS code Tools.</strong> Currently, I'm enhancing my skills in Python full stack development at Pentagon Space. As an enthusiastic learner, I enjoy building small projects along with learning new things and am eager to contribute to innovative solutions in the tech industry.
              
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
