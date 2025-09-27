import React from 'react';
import profile from '../assets/Profile2.jpg';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import Resume from '../assets/Resume.pdf'



const roles = [
  'Python Developer', 2000,
  'Front-end Developer', 2000,
  'Data Analyst', 2000,
  'Full-stack Developer', 2000,
  'Gamer', 2000
];

function Home() {
  return (
    <section id="home">
      <div className="intro-container">
        <div className="profile-img">
          <img src={profile} alt="Profile" />
        </div>
        <div className="intro">
          <h3>Hi, I'm</h3>
          <h1><span className="name">ABHI</span></h1>
          <h2 id="fill">
            And I'm{' '}
            <span className="fill" style={{ color: 'red' }}>
              <TypeAnimation
                sequence={[
                  'Python Developer', 2000,
                  'Front-end Developer', 2000,
                  'Data Analyst', 2000,
                  'Full-stack Developer', 2000,
                  'Gamer', 2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p>
            Hi, I'm Abhi, I'm a Computer Science and Engineering student with a passion for programming and technology. Currently, I'm enhancing my skills in Python full stack development at Pentagon Space. As an enthusiastic learner, I enjoy building small projects and am eager to contribute to innovative solutions in the tech industry.
          </p>
        </div>
      </div>
      <div className='icons-buttons'>
        <div className="buttons">
          <div className="btn"><a href={Resume}>Download Resume</a></div>
          {/* <div className="btn"><a href="#">Hire Me</a></div> */}
          {/* <div className="btn"><a href="#">Follow +</a></div> */}
        </div>
        <div className="intro-social-icons">
          <a href="https://www.linkedin.com"><i className="bi bi-linkedin"></i></a>
          <a href="https://www.github.com/"><i className="bi bi-github"></i></a>
          <a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-phone"></i></a>
        </div>
      </div>
    </section>
  );
}


export default Home;
