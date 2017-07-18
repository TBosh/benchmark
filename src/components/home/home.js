import React, { Component } from 'react';
import './home.css';
import BarberSlider from './barberslider.js';




class Home extends Component {
  render() {
    
    return (
      
    
      <div>
        <div className="background-img">
          <p>The waypoint between a man's style and his next adventure</p>
        </div>
        <div className="prices">
          <h3 className="text-pad">PRICES</h3>
          <p className="text-pad"> *********</p>
          <p className="text-pad">GENTLEMAN'S CUT - $35</p>
          <p className="text-pad">YOUNG GENTLEMAN'S CUT - $20</p>
          <p className="text-pad">STRAIGHT-RAZOR SHAVE - $35</p>
          <p className="text-pad">GENTLEMAN'S STEAM SHAVE - $45</p>      

        </div>
        <div className="hours">
          <h3 className="text-pad">HOURS</h3>
          <p className="text-pad"> *********</p>
          <p className="text-pad">TUESDAY-FRIDAY  9AM - 8PM</p>
          <p className="text-pad">SATURDAY  10AM - 5PM</p>
          <p className="text-pad"> *********</p>
          <p className="text-pad"> APPOINTMENTS ENCOURAGED</p>

        </div>
        <div>
          <BarberSlider/>
        </div>
      </div>
     
    );
  }
}

export default Home;