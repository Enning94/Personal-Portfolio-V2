import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // eslint-disable-line import/no-extraneous-dependencies
import { BiDownload } from 'react-icons/bi';

const Navbar = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="navbar navbar-expand-lg custom-navbar-bg text-white">
      <div className="container-fluid">
        <div className="container">
          <a className="navbar-brand  text-reset" href="/">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="logo"
              width="30"
              height="24"
            />
          </a>
        </div>
        <button
          className="navbar-toggler text-reset"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <button
                className="nav-link active  text-reset"
                type="button"
                onClick={() => scrollToSection(aboutRef)}
              >
                About Me
              </button>
            </li>
            <li className="nav-item p-2">
              <button
                className="nav-link  text-reset"
                type="button"
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
              </button>
            </li>
            <li className="nav-item p-2">
              <button
                className="nav-link  text-reset"
                type="button"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </button>
            </li>
            <li className="nav-item download-bg">
              <a className="black-btn" href="/your-cv-file.pdf" download>
                Download CV
                <span><BiDownload className="ic" /></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
