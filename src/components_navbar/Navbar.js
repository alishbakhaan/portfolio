import React from "react";
import '../components_navbar/Navbar.css'
import Toggle from "./Toggle/Toggle";

const Navbar = () =>{
    return(
<div className="n-wrapper">
  <div className="n-left">
    <div className="n-name">Alishba</div>
    <Toggle/>
  </div>
  <div className="n-right">
    <div className="n-list">
    <ul style={{listStyleType:"none"}}>
      <li>Home</li>
      <li id="Services">Service</li>
      <li>Experience</li>
      <li>Portfolio</li>
      <li>Testimonials</li>
    </ul>
    </div>
    <button className="button n-button">Contact</button>
  </div>
</div>
    )
}

export default Navbar