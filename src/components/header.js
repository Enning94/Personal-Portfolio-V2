import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  return (
    <>
      <section className="headline-vh">
        <div className="d-flex custom-navbar-bg  ms-style headline">
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

            <div>
              <h4 className="welcome-bg">Welcome! I&apos;M</h4>
            </div>
            <h1 className="primary-text">
              Festus Enning
            </h1>
            <div>
              <h5>A Software Developer</h5>
              <p className="p-style">
                {' '}
                I can help you build a product , feature or website.
                <br />
                Look through some of my work and experience!
                <br />
                If you like what you see and have a
                project you need coded,
                <br />
                don&apos;t hestiate to contact me.
                {' '}
              </p>
            </div>
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
