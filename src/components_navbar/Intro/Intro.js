import React from "react";
import '../Intro/Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Girl from '../../img/Girl.png';
import Thumbup from '../../img/thumbup.png';
import Glassesemoji from '../../img/glassesimoji.png';
import Crown from '../../img/crown.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { ThemeContext } from "../../Context";
import { useContext } from "react";
// import { motion } from 'framer-motion';

const Intro = () =>{
  // const transition = {duration : 2, type: 'spring'};
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    return(
     <div className="intro">
         <div className="i-left">
          <div className="i-name">
            <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
            <span>Alishba Khan</span>
            <span>Full Stack Developer with high level of
               experience in web designing and development,
                producting the quality work</span>
          </div>
          <button className="button i-button">Hire me</button>

         <div className="i-icons">
          <img src={Github} alt=""/>
          <img src={LinkedIn} alt=""/>
          <img src={Instagram} alt=""/>
         </div>
         </div>

         <div className="i-right">
          <img src={Vector1} alt=""/>
          <img src={Vector2} alt=""/>
          <img src={Girl} alt=""/>
          <img src={Glassesemoji} alt=""/>

          <div style={{top:'-16%', left:'80%'}}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
          </div>

          <div style={{top:'18rem', left:'0rem'}}>
            <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award' />
          </div>

          {/* Blurr Div */}
          <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
          <div className="blur" style={{background: '#C1F5FF', top:'17rem', width:'21rem',height:'11rem',left:'-9rem'}}></div>
         </div>
    </div>
    )
}

export default Intro;

          {/* <motion.img
          initial={{left: '-36%'}}
          whileInView={{left: '68%'}}
          transition={transition}
          src={Glassesemoji}
          alt=""
          />

          <motion.div
          initial={{top: '-4%', left: '74%'}}
          whileInView={{left: '68%'}}
          transition={transition}
          style={{top:'-4%', left:'68%'}}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
          </motion.div> */}