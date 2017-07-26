import React, { Component } from 'react';
import './barbers.css'

class Barbers extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
      <div className="intro">
        <h3>All of us are fully certified barbers yada yada commited to excellence, yada yada intro.
        </h3>
      </div>
      <div className="profile">
        <div className="prof1">
          <div className="profGradientRight">
            <div className="textRight">
              <h2>Jim Bobbington</h2>
              <p>Bio bio blah blah</p>
              <div className="socialLinks">
                <a href="https://www.instagram.com/benchmark_barbershop/">
                  <i className="fa fa-instagram fa-2x icons" aria-hidden="true" ></i>
                </a>
                <a href="https://www.facebook.com/">
                <i className="fa fa-facebook fa-2x icons" aria-hidden="true"></i>
                </a>
                <a href="https://www.plus.google.com/">
                <i className="fa fa-google fa-2x icons" aria-hidden="true"></i>
                </a>
                <a href="https://www.twitter.com/">
                <i className="fa fa-twitter fa-2x icons" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="prof2">
          <div className="profGradientLeft">
            <div className="textLeft">
              <h2>Bob Jimmington</h2>
              <p>Bio bio blah blah</p>
              <div className="socialLinks">
                <a href="https://www.instagram.com/benchmark_barbershop/">
                  <i className="fa fa-instagram fa-2x icons" aria-hidden="true" ></i>
                </a>
                <a href="https://www.facebook.com/">
                <i className="fa fa-facebook fa-2x icons" aria-hidden="true"></i>
                </a>
                <a href="https://www.plus.google.com/">
                <i className="fa fa-google fa-2x icons" aria-hidden="true"></i>
                </a>
                <a href="https://www.twitter.com/">
                <i className="fa fa-twitter fa-2x icons" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="prof1">
          <div className="profGradientRight">
            <div className="textRight">
              <h2>Jim Bobbington</h2>
              <p>Bio bio blah blah</p>
              <div className="socialLinks">
                <a href="https://www.instagram.com/benchmark_barbershop/">
                  <i className="fa fa-instagram fa-2x icons" aria-hidden="true" ></i>
                </a>
                <a href="https://www.facebook.com/">
                <i className="fa fa-facebook fa-2x icons" aria-hidden="true"></i>
                </a>
                <a href="https://www.plus.google.com/">
                <i className="fa fa-google fa-2x icons" aria-hidden="true"></i>
                </a>
                <a href="https://www.twitter.com/">
                <i className="fa fa-twitter fa-2x icons" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Barbers;