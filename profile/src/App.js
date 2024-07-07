
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
  /* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './component/Skills';
import Education from './component/Education';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import GoToTop from './component/GoToTop';
import Navbar1 from './component/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <GoToTop/>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
