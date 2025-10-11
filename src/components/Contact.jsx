import React from 'react';

const OWNER_EMAIL = "abhiram143sag@gmail.com";
const OWNER_PHONE = "+91";
const PERMANENT_ADDRESS = "Kolar - 563101";
const CURRENT_ADDRESS = "Kolar- 563101";

const GetInTouch = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="get-in">
          <h1>Get in Touch</h1>
          <div className="contact-info">
            <h5><i className="bi bi-person-fill"></i> Abhi Ram</h5>
            
            <h5><i className="bi bi-geo-alt"></i> <strong>Permanent Address:</strong> {PERMANENT_ADDRESS}</h5>
            <h5><i className="bi bi-geo-alt-fill"></i> <strong>Current Address:</strong> {CURRENT_ADDRESS}</h5>
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href={`tel:${OWNER_PHONE}`} aria-label="Phone">
              <i className="bi bi-telephone-fill"></i>
            </a>
            <a href="mailto:abhiram143sag@gmail.com"><i className='bi bi-envelope'></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
