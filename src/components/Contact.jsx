import React, { useState } from 'react';

const OWNER_PHONE = "+917996325285";
const PERMANENT_ADDRESS = "Kolar - 563101";
const CURRENT_ADDRESS = "Bengaluru - 560010";

const GetInTouch = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const phone = formData.get('phone').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    setStatus('');

    setSending(true);
    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_API_URL || '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Email delivery failed.');
      }

      form.reset();
      setStatus('Thanks for reaching out. Your message has been sent.');
      setStatusType('success');
    } catch (error) {
      setStatus(error.message || 'The message could not be sent. Please try again later.');
      setStatusType('error');
    } finally {
      setSending(false);
    }
  };

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
            <a href="https://www.linkedin.com/in/abhi-ram12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/Its-Abhi-Ram/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            {/* <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a> */}
            <a href={`tel:${OWNER_PHONE}`} aria-label="Phone">
              <i className="bi bi-telephone-fill"></i>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Enter your name" required />

          <label htmlFor="contact-phone">Phone number</label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" required />

          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />

          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="6" placeholder="Write your message here..." required />

          <button type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send message'}</button>
          {status && <p className={`contact-status ${statusType}`} role="status">{status}</p>}
        </form>
      </div>
      {sending && (
        <div className="email-sending-overlay" role="status" aria-live="polite" aria-label="Sending your email">
          <div className="email-sending-animation" aria-hidden="true">
            <i className="bi bi-envelope-paper-fill email-envelope"></i>
            <i className="bi bi-send-fill email-send"></i>
          </div>
          <p>Sending your message...</p>
        </div>
      )}
    </section>
  );
};

export default GetInTouch;
