import React, { Component } from 'react';
import './about.css';
import logo from '../../media/PlateLogo.svg';

class About extends Component {
  render() {
    return (
      <div className="mainContShop background-img-big">
        <div className="Shopmain-box"> 
          
          <div className="ShopWording">

            <h3>APPROACH</h3>
            <p>
            Upon reaching the summit of a mountain, a climber/hiker will
            encounter a small, round plaque, (or benchmark) embedded in the 
            stone, indicating the peak’s highest point. A very small population 
            of people ever see these markers in person due to the strenuous 
            nature of reaching the summit.

            The benchmark plaque is our symbol and reminder that our
            service standards and workmanship are set high. As a team we are
            striving to reach these together, steadily working towards higher
            ground, step by step learning and progressing at our craft.</p>

            <h3>THE SHOP</h3>
            <p>
            The Benchmark brand and story all began with our name. Benchmark is 
            the business model, our mantra, the style of our shop, 
            the products we carry and the client experience we provide. 
            We are not just a barbershop. We are a destination, an experience, an 
            expression of our passions, a lifestyle and a place to better yourself. 
            We who run the shop are enriched because of time spent with our clients 
            and the causes we support. We aim high. We know our clients do too. 
            </p>
            <div src={logo} className="text-logo" >
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;