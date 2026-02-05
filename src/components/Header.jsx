import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home'); // default active link

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections || sections.length === 0) return;

    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0;

    let ticking = false;

    const updateActiveByScroll = () => {
      const scrollPos = window.scrollY + headerHeight + 10; // small offset
      // find the section whose top is the greatest value <= scrollPos
      let current = sections[0];
      for (const sec of sections) {
        if (sec.offsetTop <= scrollPos) {
          current = sec;
        } else break;
      }
      setActiveLink(`#${current.id}`);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveByScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // also handle resize (header size may change)
    window.addEventListener('resize', updateActiveByScroll);

    // run once to set initial active link
    updateActiveByScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveByScroll);
    };
  }, []);

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
                onClick={(e) => handleLinkClick(e, href)}
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
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            padding: 1rem 1.5rem;
            border-radius: 0 0 8px 8px;
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
