import React, { useState } from 'react';

const OWNER_EMAIL = "abhi@gmail.com";
const OWNER_PHONE = "+911234505639";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setNotification("");

    // Simulate sending email and SMS (replace with real API in production)
    await new Promise((res) => setTimeout(res, 2000));

    setSending(false);
    setNotification("Message sent successfully!");

    // Optionally, reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

    // Hide notification after 3s
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="get-in">
          <h1>Get in Touch</h1>
          <div className="contact-info">
            <h5>
              <i className="bi bi-person" aria-hidden="true"></i> Abhi Ram
            </h5>
            <h5>
              <i className="bi bi-telephone" aria-hidden="true"></i> {OWNER_PHONE}
            </h5>
            <h5>
              <i className="bi bi-envelope" aria-hidden="true"></i> {OWNER_EMAIL}
            </h5>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.github.com/" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.instagram.com/"  aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="tel:+1234567890" aria-label="Phone">
              <i className="bi bi-phone"></i>
            </a>
          </div>
        </div>
        <div className="contact-box">
          <h1>Contact Me</h1>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              disabled={sending}
            />
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              disabled={sending}
            />
            <input
              type="tel"
              placeholder="Enter Number"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              disabled={sending}
            />
            <textarea
              placeholder="Enter Message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              disabled={sending}
            ></textarea>
            <button type="submit" disabled={sending}>
              {sending ? (
                <span>
                  <span className="spinner" style={{
                    display: "inline-block",
                    width: "1em",
                    height: "1em",
                    border: "2px solid #fff",
                    borderTop: "2px solid #007bff",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    marginRight: "8px",
                    verticalAlign: "middle"
                  }}></span>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
          {notification && (
            <div className="notification" style={{
              marginTop: "1em",
              padding: "0.75em 1em",
              background: "#d4edda",
              color: "#155724",
              borderRadius: "4px",
              border: "1px solid #c3e6cb"
            }}>
              {notification}
            </div>
          )}
        </div>
      </div>
      {/* Spinner animation keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
