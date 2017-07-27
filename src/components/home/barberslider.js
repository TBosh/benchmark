import React, { Component } from 'react';
import Slider from 'react-slick';
import './barberslider.css'
import { Link } from "react-router-dom";
import aboutbackground from "../../media/aboutbackground.jpg";
import barber from "../../media/barber.jpg";
import zionbackground from "../../media/store.jpg";

class BarberSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };
    return (
      <div className="barber-caro">
        <Slider {...settings}>
          <div><img className="barber-img" src={aboutbackground} alt=""/></div>
          <div><img className="barber-img" src={barber} alt=""/></div>
          <div><img className="barber-img" src={zionbackground} alt=""/></div>
        </Slider>
        <Link to="/barbers">
          <div className="barberButton barberButtonBack"></div>
          <div className="barberButton">Meet the Barbers</div>
        </Link>
      </div>
    );
  }
}

export default BarberSlider;