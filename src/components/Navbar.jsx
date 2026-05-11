import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#4F46E5" />
              <path
                d="M7 14L11 10L15 14L21 8"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="21" cy="20" r="3" fill="white" opacity="0.7" />
              <circle cx="7" cy="20" r="2" fill="white" opacity="0.5" />
            </svg>
          </div>
          <span className="logo-text">
            <span className="logo-algo">Algo</span>
            <span className="logo-vision">Vision</span>
          </span>
        </a>

        {/* Nav Links */}
        <ul className="navbar-links">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li className="has-dropdown">
            <a href="#">
              Visualize <span className="chevron">▾</span>
            </a>
          </li>
          <li className="has-dropdown">
            <a href="#">
              Subjects <span className="chevron">▾</span>
            </a>
          </li>
          <li>
            <a href="#">Playground</a>
          </li>
          <li>
            <a href="#">Compare</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Right side */}
        <div className="navbar-right">
          <div className="search-box">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Search algorithms, topics..." />
          </div>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64748B"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>
          <a href="#" className="btn-login">
            Login / Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
