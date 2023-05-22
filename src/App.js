import {NavBar}   from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';


const Tracking_ID = "G-HZE03TJXRY"
ReactGA.initialize(Tracking_ID);


function App() {
  return (
    
    <div>
      
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
      <Footer/>
    </div>
  );
}

export default App;
