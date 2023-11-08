import Navbar from './navBar';
import Home from '../components/header';
import Projects from '../components/projects';
import About from '../components/about';
// import Contact from '../components/contact';

const MainPage = () => (
  <>
    <Navbar />
    <Home />
    <Projects />
    <About />
    {/* <Contact /> */}
  </>
);

export default MainPage;
