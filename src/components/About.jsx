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
            Hi, I'm Abhi—a Computer Science and Engineering student with a passion for programming and technology. Currently, I'm enhancing my skills in Python full stack development at Pentagon Space. As an enthusiastic learner, I enjoy building small projects and am eager to contribute to innovative solutions in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
