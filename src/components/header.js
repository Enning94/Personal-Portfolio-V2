import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  return (
    <>
      <section className="headline-vh">
        <div className="d-flex custom-navbar-bg  ms-style p-3 headline">
          <div className="d-flex sm-icon1">
            <div className="sm-title-wrapper">
              <h4 className="fs-6 sm-title">FOLLOW ME ON: </h4>
            </div>
            <span className="line"> </span>
            <ul className="social-media d-flex">
              <li className="sm-icon">
                <a href="/" aria-label="LinkedIn">
                  <i className="bi bi-linkedin icon-style" />
                </a>
              </li>
              <li className="sm-icon">
                <a href="/" aria-label="Twitter">
                  <i className="bi bi-twitter-x icon-style" />
                </a>
              </li>
              <li className="sm-icon">
                <a href="/" aria-label="GitHub">
                  <i className="bi bi-github icon-style" />
                </a>
              </li>
            </ul>
          </div>
          <div className="headline-text">
            <h5 className="welcome-bg text-center p-2">Welcome! I&apos;m</h5>
            <h2 className="fs-1">Festus</h2>
            <h4>Software Developer</h4>
            <p className="p-style">
              {' '}
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and have a
              project you need coded, don&apos;t hestiate to contact me.
              {' '}
            </p>
          </div>
          <div className="space-container">
            <span />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
