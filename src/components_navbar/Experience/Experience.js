import React from "react";
import '../Experience/Experience.css';
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Experience = () =>{
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    return(
   <div className="experience" id="Experience">
    <div className="achievement">
      <div style={{color: darkMode? 'black': ''}} className="circle">8+</div>
      <span>Years</span>
      <span>Experience</span>
    </div>

    <div className="achievement">
      <div style={{color: darkMode? 'black': ''}} className="circle">20+</div>
      <span>Completed</span>
      <span>Projects</span>
    </div>

    <div className="achievement">
      <div style={{color: darkMode? 'black': ''}} className="circle">5+</div>
      <span>Companies</span>
      <span>Work</span>
    </div>
   </div>
    )
}

export default Experience;