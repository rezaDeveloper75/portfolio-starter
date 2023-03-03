import Navbar from "./components/navbar/navbar";
import './App.css'
import Intro from "./components/intro/intro";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import Works from "./components/works/works";
import Portfolio from "./components/portfolio/portfolio";
import Testmonial from "./components/testmonials/testmonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { useContext, useEffect,useState } from "react";
import {themeContext} from "./context";
import {WindowsSizeContext} from './windowSizeContext';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
  const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
  };

  window.addEventListener('resize', handleWindowResize);

  return () => {
      window.removeEventListener('resize', handleWindowResize);
  };
  });
  return (
    <WindowsSizeContext.Provider value={{windowSize}}>
        <div className="App"
      style={{background : darkMode? 'black' : '', color : darkMode? 'white' : '' }}
      >
        <Navbar/>
        <Intro />
        <Services/>
        <Experience/>
        <Works/>
        <Portfolio/>
        <Testmonial/>
        <Contact/>
        <Footer/>
      </div>
    </WindowsSizeContext.Provider>
  );
}

export default App;
