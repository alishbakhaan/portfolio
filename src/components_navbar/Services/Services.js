import React from "react";
import '../Services/Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import Resume from '../../img/Resume.pdf';
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Services = () =>{
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
return(
<div className="services">
    {/* left side */}
    <div className="awesome" id="Services">
      <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
      <span>Services</span>
      <span>
          Hi there! I'm Alishba Khan, and I'm a passionate React developer.<br/>
           With a strong foundation in JavaScript and front-end development, 
        <br/>
        I specialize in building dynamic and interactive user interfaces<br/>
         using the React library. I have experience working on various projects,
      </span>
      <a href={Resume} download><button className="button s-button">Downnload CV</button></a>
      <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>

    </div>
    {/* right side */}
    <div className="cards">
          {/* first */}
          <div style={{left: '14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe Xd"}
            />
          </div>
          {/* second */}
          <div style={{top: '12rem', left: '-4rem'}}>
            <Card
            emoji={Glasses}
            heading={'Design'}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe Xd"}
            />
          </div>
           {/* third */}
          <div style={{top: '19rem', left: '12rem'}}>
            <Card
            emoji={Humble}
            heading={'Design'}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe Xd"}
            />
          </div>

          <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

    </div>
</div>
    )
}

export default Services