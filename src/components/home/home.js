import React, { Component } from 'react';
import './home.css';
import BarberSlider from './barberslider.js';
import { Link } from "react-router-dom";




class Home extends Component {
  render() {
    
    return (
      
    
      <div>
        <div className="background-img">
          <div className="waypoint">
            <h2>The waypoint between a man's style and his next adventure</h2>
          </div>
        </div>
        <div className="hours">
          <h3 className="text-pad">HOURS</h3>
          <p className="text-pad"> *********</p>
          <p className="text-pad">TUESDAY-FRIDAY  9AM - 8PM</p>
          <p className="text-pad">SATURDAY  10AM - 5PM</p>
          <p className="text-pad"> *********</p>
          <p className="text-pad"> APPOINTMENTS ENCOURAGED</p>
          <Link to="/booking">
            <div className="bookingButton bookingButtonBack"></div>
            <div className="bookingButton">Make an appointment</div>
          </Link>

        </div>
        <div className="prices">
          <h3 className="text-pad">PRICES</h3>
          <p className="text-pad"> *********</p>
          <p className="text-pad">GENTLEMAN'S CUT - $35</p>
          <p className="text-pad">YOUNG GENTLEMAN'S CUT - $20</p>
          <p className="text-pad">STRAIGHT-RAZOR SHAVE - $35</p>
          <p className="text-pad">GENTLEMAN'S STEAM SHAVE - $45</p>      

        </div>
        
        <div>
          <BarberSlider/>
        </div>
        <div className="contact">
          <div>
            <h3  className="following">Stop by for a visit, we're located at <a className="textFix" href="https://www.google.com/maps/place/104+N+Coral+Canyon+Blvd,+Washington,+UT+84780/@37.1617652,-113.4481547,18z/data=!3m1!4b1!4m5!3m4!1s0x80ca593157edfd93:0x1626a7c642d7ba1!8m2!3d37.1617652!4d-113.4471983">2303 N Coral Canyon Blvd suite 107, Washington UT, 84780</a></h3>
            <div className="following">
            <h3>Follow us on our journey</h3>
              <div className="contactLinks">
                <a href="https://www.instagram.com/benchmark_barbershop/">
                  <i className="fa fa-instagram fa-3x icons" aria-hidden="true" ></i>
                </a>
                <a href="https://www.facebook.com/">
                <i className="fa fa-facebook fa-3x icons" aria-hidden="true"></i>
                </a>
                <a href="https://www.plus.google.com/">
                <i className="fa fa-google fa-3x icons" aria-hidden="true"></i>
                </a>
                <a href="https://www.twitter.com/">
                <i className="fa fa-twitter fa-3x icons" aria-hidden="true"></i>
                </a>
                {/*<div className="framer">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.8093480351151!2d-113.44815469597884!3d37.16176519615734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca593157edfd93%3A0x1626a7c642d7ba1!2s104+N+Coral+Canyon+Blvd%2C+Washington%2C+UT+84780!5e0!3m2!1sen!2sus!4v1500505201256" width="400" height="300"></iframe>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Home;