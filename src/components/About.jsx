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
            Hi, I'm Abhi from Kolar. I'm a recently graduated in Bachelor of Engineering of branch Computer Science and Engineering from C. Byregowda Institute of Technology under VTU and also I'm secured with 8.52 CGPA. I'm good at technical skills like <strong>Python programming,  Django framework, SQL and Web Technlogies like HTML, CSS , JS and React js 
              </strong> and having experience of <strong>git, github and VS code Tools.</strong> Currently, I'm enhancing my skills in Python full stack development at Pentagon Space. As an enthusiastic learner, I enjoy building small projects along with learning new things and I am eager to contribute to innovative solutions in the tech industry.
              
          </p>
            <br />
          <h2>Education</h2>
            <div className="education">
            <div className='edu'>
              <h4 className='edu-level'>Graduation</h4>
              <p className='course'>Bachelor of Engineering in Computer Science and Technology</p>
              <p className='college'>C. Byregowda Institute of Technology, Kolar (affiliated to Visvesvaraya Technological University) <br />(2021-2025)</p>
              <p className='percent'>CGPA  : 8.52/10</p>
          </div>

          <div className='edu'>
              <h4 className='edu-level'>Pre-University</h4>
              <p className='college'> Mahila Samaja PU College, Kolar <br />(2019-2021)</p>
              <p className='course'>Stream : PCMB</p>
              <p className='percent'>Percentage  : 81.67%</p>
          </div>

          <div className='edu'>
              <h4 className='edu-level'>Secondary School</h4>
              <p className='college'>Janatha High School, Kembodi <br />(2018-2019)</p>
              <p className='percent'>Percentage : 90.4%</p>
          </div>

            </div>
          
          

        </div>
      </div>
      <style>{
        `
        h2 {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
  position: relative;
  color: #0f1c2e;
  letter-spacing: 1.5px;
}

 h2::after {
  content: '';
  width: 3.75rem;
  height: 0.25rem;
  background: linear-gradient(90deg, #0f1c2e 60%, #5cc6ff 100%);
  position: absolute;
  bottom: -0.6rem;
  left: 0;
  border-radius: 2px;
}

h4 {
  display : flex;
  justify-content : center;

  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
  position: relative;
  color: #0f1c2e;
  letter-spacing: 1.5px;
}

 h4::after {
  display : flex;
  content: '';
  width: 3.75rem;
  height: 0.15rem;
  background: linear-gradient(90deg, #0f1c2e 60%, #5cc6ff 100%);
  position: absolute;
  bottom: -0.6rem;
  left: 300;
  border-radius: 2px;
}


  
.education{
      display: flex;
      justify-content: center ; 
      text-align : center ;
      flex-direction : column;
      gap : 3rem;
      
  }

.education .edu{
        padding: 2rem;
        background: linear-gradient(to bottom, #eaf4ff 60%, #fefefe 100%);
        border-radius: 0 0 2rem 2rem;
        box-shadow: 0 2px 4px #5cc6ff;
        
}
 .percent{
        font-weight : 1000;
        font-size : 1.2rem;
 }


        
        `}</style>
    </section>
  );
}

export default About;
