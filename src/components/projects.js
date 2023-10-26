import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from './assets/images/coinHub.png';

function Projects() {
  return (
    <>
      <section className="project-container">
        <div className="project-title-wrapper">
          <div>
            <h2>Projects</h2>
            <p>lorem lorem lorem lorem lorem lorem</p>
          </div>
          <div className="btn-hide">
            <ul className="project-nav-item-wrapper">
              <li><button type="button" className="project-nav-item">Recent Works</button></li>
              <li>
                {' '}
                <button type="button" className="project-nav-item">Collaborative Projects</button>
              </li>
              <li>
                {' '}
                <button type="button" className="project-nav-item">Solo Projects</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="project-cards p-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 ">
                <img src={Image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button type="button" className="card-footer">
                  <small type="button" className="text-body-secondary">Last updated 3 mins ago</small>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 text-bg-dark">
                <img src={Image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button type="button" className="card-footer">
                  <small type="button" className="text-body-secondary">Last updated 3 mins ago</small>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 text-bg-dark">
                <img src={Image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <div>
                    <ul className="skills-container d-flex justify-content-between">
                      <li>React\Redux</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Jest</li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="./assets/images/" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
