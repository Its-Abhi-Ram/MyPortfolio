import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home'); // default active link

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'TechStack' },
    { href: '#internship', label: 'Internship' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header>
      <nav id="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1 id="name">ABHI RAM</h1>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={handleMenuToggle}
        >
          <i className="bx bx-menu" style={{ fontSize: 32 }}></i>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <li key={href} className="item">
              <a
                href={href}
                className={activeLink === href ? 'active' : ''}
                onClick={() => handleLinkClick(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <style>{`
        #navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: white;
          font-weight: 500;
        }

        .nav-links a.active {
          color: #007bff;
          border-bottom: 2px solid #007bff;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 70px;
            right: 20px;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            padding: 1rem 2rem;
            border-radius: 8px;
            z-index: 100;
            
          }
          
          .nav-links a {
            color: black;
          }

          .nav-links.open {
            display: flex;
          }

          .menu-toggle {
            display: block;
            position: absolute;
            right: 20px;
            top: 20px;
            z-index: 101;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
