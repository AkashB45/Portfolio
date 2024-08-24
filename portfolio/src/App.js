import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { createContext, useContext, useState } from "react";
import { Helmet } from "react-helmet";
export const Themecontext = createContext();
function App() {
  const[darkmode,setDarkmode]=useState(false);
  return (
    
      <Themecontext.Provider value={{darkmode,setDarkmode}}>
    <div className="App" style={{background:darkmode?"black":null,
      color:darkmode?"white":null
    }}>
       <Helmet>
        <title>Akash Portfolio</title>
        <meta name="description" content="Helmet application" />
     </Helmet>

      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </div>
      </Themecontext.Provider>
  );
}

export default App;
