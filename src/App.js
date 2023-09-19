import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    
    <div className="page">
      <Navbar/>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      
      </div>

  );
}

export default App;
