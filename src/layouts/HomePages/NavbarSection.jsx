import React, { useEffect, useState } from "react";
import "./NavbarSection.css";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="navbar-wrap">

      <nav className="navbar">

        {/* LOGO */}
        <div className="navbar__brand">
          <h1 className="navbar__title">
            
            <span className="color-green">Pro</span>Cleaning
          </h1>
        </div>

        {/* MENU */}
        <ul
          className={`navbar__menu ${isOpen ? "navbar__menu--active" : ""
            }`}
        >

          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#service" onClick={() => setIsOpen(false)}>
              Service
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>

          {/* BUTTON */}


        </ul>
        <button className="navbar__btn bg-green">
          Get Service
        </button>

        {/* BURGER */}
        <button
          type="button"
          className="navbar__burger"
          onClick={() => setIsOpen(!isOpen)}
        >

          <div className={`burger-line ${isOpen ? "open" : ""}`}></div>

          <div className={`burger-line ${isOpen ? "open" : ""}`}></div>

          <div className={`burger-line ${isOpen ? "open" : ""}`}></div>

        </button>

      </nav>

    </header>
  );
};

export default Navbar;