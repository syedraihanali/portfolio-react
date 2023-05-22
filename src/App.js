import {NavBar}   from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';


function App({ Component, pageProps }) {
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
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default App;
