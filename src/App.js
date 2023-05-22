import {NavBar}   from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReactGA from 'react-ga'

import { Analytics } from '@vercel/analytics/react';
import { useEffect } from "react";




function App() {

  ReactGA.initialize('UA-268974325-1')

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])

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
      <Analytics/>
    </div>
  );
}

export default App;
