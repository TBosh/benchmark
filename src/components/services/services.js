import React, { Component } from 'react';
import './services.css';
import logo from "../../media/web_stamp.svg";

class Services extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className="Servicesmain-box"> 
        <div className="wording">
          <h4>MEN’S HAIRCUT - 35</h4>
          <p>
          Sit down and discuss what is and what is not working with your hair. Your barber will address 
          face shape, hair length and texture, and then decide which haircut and style is best suited for 
          you. Every haircut is finished with a straight razor neck shave, your choice of steam or chilled 
          towel and styled with one of our products. 
          </p>

          <div className="breaklines"></div>

          <h4>BOY’S HAIRCUT - 25</h4>
          <p>
          For our clients 17 and under. We give our younger clients the same attention to detail as the 
          men. Straight razor neck shave will be determined on a case by case basis.
          </p>

          <div className="breaklines"></div>

          <h4>BEARD GROOMING - 15/25</h4>
          <p>
          We will give your beard+mustache a proper trim, shape and balance. 
          We include an application of beard oil or balm to keep your beard healthy and controlled.
          Additionally, if a line up and shave is desired on neck and cheek line, we will recline you 
          back and provide a relaxing hot towel and straight razor shave. Every shave is followed 
          with a chilled towel and facial moisturizer. 
          </p>

          <div className="breaklines"></div>

          <h4>BENCHMARK FACE SHAVE - 35</h4>
          <p>
          Recline back for a traditional straight razor shave. Enjoy warm lather, steam towel, a 
          close shave, all followed with a chilled towel and facial moisturizer.
          </p>

          <div className="breaklines"></div>

          <h4>BENCHMARK FIELD SHAVE - 45</h4>
          <p>
          This signature Benchmark service is sure to be a favorite experience.
          Choose from a woodsy, tobacco or peppermint scented pre-shave oil. We then build a 
          lather from our shave soap and hot water from a thermos and generously apply with a 
          brush just like grandpa used to. The aroma will take your mind to clean mountain air or 
          a smoldering campfire. After a traditional straight razor shave, take the shave brush 
          home with you. 
          </p>

          <div className="breaklines"></div>

          <h4>HEAD SHAVE - 35</h4>
          <p>          
          Our straight razor head shave includes steam towel and is finished with a chilled towel 
          and moisturizer.
          </p>

          <div className="breaklines"></div>
          
          <a href='https://squareup.com/appointments/book/Y198W1RSEFMSW/tbi'>
            <div className="bookingButtonServ bookingButtonBack"></div>
            <div className="bookingButtonServ">Make an appointment</div>
          </a>

          
            <img className="bottom-logo" src={logo} alt=""/>
          


        </div>
      </div>
    );
  }
}

export default Services;