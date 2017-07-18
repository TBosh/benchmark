import React, { Component } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import logo from '../../media/PlateLogo.svg';


class Navbar extends Component {
  constructor() {
    super();
    
    this.state = {
      menuShow: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu () {
    this.setState ( { menuShow: !this.state.menuShow } )
    console.log(this.state.menuShow)
  }

  render() {
    
    return (
      
        <div>
         
          {this.state.menuShow ? (
            <div>
              <div className="header">
              </div>
              <div className="menu">
                <div>                  
                <i onClick={this.toggleMenu} className="fa fa-times fa-3x menu-icon" aria-hidden="true"></i>
                  <Link to="/about">
                    <a className="menu-text">About</a>
                  </Link>
                  <Link to="/barbers">
                    <a className="menu-text">Barbers</a>
                  </Link>
                  <Link to="/booking">
                    <a className="menu-text">Booking</a>
                  </Link>
                  <Link to="/store">
                    <a className="menu-text">Store</a>
                  </Link>
                  <Link to="/members">
                    <a className="menu-text">Members</a>
                  </Link>
                  <Link to="/news">
                    <a className="menu-text">News</a>
                  </Link>
                  <Link to="/our_work">
                    <a className="menu-text">Our Work</a>
                  </Link>
                  <Link to="/contact">
                    <a className="menu-text">Contact</a>
                  </Link>
                </div>
              </div>
            </div>) : (
            <div className="header">
              <i onClick={this.toggleMenu} className="fa fa-bars fa-3x menu-icon" aria-hidden="true"></i>
              <Link to="/">
              <img src={logo} className="logo" alt="logo" />            
              </Link>
            </div>
          )
          }
        </div>
      
    );
  }
}

export default Navbar;