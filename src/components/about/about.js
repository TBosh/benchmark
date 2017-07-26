import React, { Component } from 'react';
import './about.css';
import logo from '../../media/PlateLogo.svg';

class About extends Component {
  render() {
    return (
      <div className="main-box"> 
        <div src={logo} className="text-logo" >
        
        </div>
        <div className="wording">
          <p>By definition, Benchmark is a standard, which everything else is measured against. Upon reaching the summit of a mountain, a climber/hiker will encounter a small plaque indicating the peak’s elevation. This plaque, (or benchmark), acts as a marker. 
          </p>

          <p>The standards set in Benchmark Barbershop are “markers” for our team to reach again and again. Eventually, mastering the disciplines of our craft. Not being content, new challenging markers are placed, setting the bar higher for ourselves and ultimately creating at a higher level for our clients. 
          </p>
        </div>
      </div>
    );
  }
}

export default About;