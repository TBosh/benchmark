import React, { Component } from 'react';
import Slider from 'react-slick';
import './barberslider.css'
import { Link } from "react-router-dom";
import barber from "../../media/barber.jpg";
import barber1 from '../../media/barber1.jpg';
import barber2 from '../../media/barber2.jpg';
import barber3 from '../../media/barber3.jpg';

class BarberSlider extends Component {
  render() {
    var settings = {
        infinite: true,           
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 500,
        centerMode: true,
      //  initialSlide: 1,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: false,
        draggable: true,
      //  focusOnSelect: true,
        variableWidth: true,
    };
    return (
      <div className="barber-caro">
        <Slider {...settings}>
          <div className="barber-img"><img src={barber} alt=""/></div>
          <div className="barber-img"><img src={barber1} alt=""/></div>
          <div className="barber-img"><img src={barber2} alt=""/></div>
          <div className="barber-img"><img src={barber3} alt=""/></div>
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