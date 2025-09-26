import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className={`header fixed-top ${scrolled ? "solid" : ""}`}
    >
      <div className="container-fluid container-xl position-relative">
        <div className="top-row d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img
              className="sitlog"
              src="/logo_cpem.png"
              alt="Logo de la institucion"
            />
          </a>
          <div className="d-flex align-items-center">
            <div className="social-links">
              <a
                href="https://www.facebook.com/cpem.taquimilan.2025"
                className="facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" class="twitter">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container d-flex justify-content-center position-relative">
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">Oferta educativa</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
