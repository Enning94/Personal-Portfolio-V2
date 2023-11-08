/* eslint-disable react/no-array-index-key */
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import PropTypes from 'prop-types';
// import Image from './assets/images/coinHub.png';
// import Projects from './projects';
import '../project.css';

const Project = ({
  project: {
    description, title, date, type, projImage, githubLink, demoLink, techs, stacks,
  },
}) => (
  <>
    <section
      className="projects d-flex w-100 align-items-center project-container"
    >
      {/* <span className=""> </span> */}
      <div className="projects-container d-flex w-100 justify-content-center">
        <h3 className=" vertical-text" data-aos="fade-down">FEATURED WORKS</h3>
        <div className="projects-carousel d-flex justify-content-between">
          <div className="proj-info" data-aos="fade-down">
            <h4 className="smal-title" data-as="fade-right">FEATURED WORKS</h4>
            <h2 className="title " data-aos="fade-left">
              <span className="text-yellow arr-style">{'> '}</span>
              {title}
            </h2>
            <p data-aos="zoom-in" className="p-small">{description}</p>
            <ul className="tools p-small d-flex">
              {techs.map((tool, id) => (
                <li key={id}>{tool}</li>
              ))}
            </ul>
            <ul className="project-stacks d-flex p-small">
              {stacks.map((stack, id) => (
                <li key={id}>{stack}</li>
              ))}
            </ul>
            <div className="btns mt-5 d-flex">
              <a className="black-btn" href={githubLink}>
                Source code
                <span><BsGithub className="ic" /></span>
              </a>
              <a href={demoLink} className="black-btn">
                See Live
                {' '}
                <span><BiLinkExternal className="ic" /></span>
              </a>
            </div>
          </div>
          <div className="proj-date d-flex flex-column align-items-end">
            <p data-aos="fade-left">{date}</p>
            <p data-aos="fade-left" className="type text-yellow ">{type}</p>
            <div className="project-img d-flex justify-content-center align-items-center" data-aos="fade-down">
              <img src={projImage} alt="" className="card-img" data-aos="flip-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

Project.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    projImage: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default Project;
