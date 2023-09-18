import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
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
      
      </div>

  );
}

export default App;
