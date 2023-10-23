import myPic from './assets/images/Transparent BG.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  return (
    <>
      <div className="d-flex justify-content-between custom-navbar-bg p-3">
        <div className="p-5">
          <h5 className="welcome-bg text-center p-2">Welcome! I&apos;m</h5>
          <h2 className="fs-1">Festus</h2>
          <h4>Software Developer</h4>
          <p>
            {' '}
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don&apos;t hestiate to contact me.
            {' '}
          </p>
        </div>
        <div className="p-1 pic_container">
          {/* <h2>jsdsc</h2> */}
          <img
            src={myPic}
            alt="my_pic"
            width="90%"
            height="100%"
          />
          {/* <h3>hhehe</h3> */}
        </div>
        <div className="d-flex flex-column justify-content-between ">
          <div className="sm-title-wrapper">
            <h4 className="fs-6 sm-title">FOLLOW ME ON: </h4>
          </div>
          <span> ------- </span>
          <ul className="social-media">
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
      </div>
    </>
  );
}

export default Home;
