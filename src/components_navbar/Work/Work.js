import React from "react";
import '../Work/Work.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Work = () =>{
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    return(
   <div className="work">
      {/* left side */}
    <div className="brands">
      <span style={{color: darkMode? 'white': ''}}>Works For All these</span>
      <span>Brands & Clients</span>
      <span>
          Hi there! I'm Alishba Khan, and I'm a passionate React developer.<br/>
           With a strong foundation in JavaScript and front-end development, <br/>
        I specialize in building dynamic and interactive user interfaces<br/>
         using the React library. I have experience working on various projects,<br/>
      </span>
     <button className="button w-button">Hire Me</button>
      <div className="blur w-blur1" style={{background:"#ABF1FF94"}}></div>
    </div>

    {/* right side */}
    <div className="w-right">
      <div className="w-mainCircle">
        <div className="w-secCircle">
          <img src={Upwork} alt="Upwork"/>
        </div>
        <div className="w-secCircle">
          <img src={Fiverr} alt="Fiverr"/>
        </div>
        <div className="w-secCircle">
          <img src={Amazon} alt="Amazon"/>
        </div>
        <div className="w-secCircle">
          <img src={Shopify} alt="Shopify"/>
        </div>
        <div className="w-secCircle">
          <img src={Facebook} alt="Facebook"/>
        </div>
      </div>
      {/* background circles */}
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>

    </div>
   </div>
    )
}

export default Work;