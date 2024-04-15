import React, { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Navbar from "./components_navbar/Navbar";
import '../src/App.css'
import Intro from "./components_navbar/Intro/Intro";
import FloatingDiv from "./components_navbar/FloatingDiv/FloatingDiv";
import { ThemeContext } from "./Context";
import { useContext } from "react";
import Services from "./components_navbar/Services/Services";
import Experience from "./components_navbar/Experience/Experience";
import Work from "./components_navbar/Work/Work";
import Contact from "./components_navbar/Contact/Contact";
import Portfolio from "./components_navbar/Portfolio/Portfolio"
import Footer from "./components_navbar/Footer/Footer";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode? 'black': '', color: darkMode? 'white': ''}}>
      <Navbar/>
      <Intro/>
      <FloatingDiv/>
      <Services/>
      <Experience/>
      <Work/>
      <Contact/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
