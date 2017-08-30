import React, { Component } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import logo from '../../media/arched_logo.svg';
import '../../animate.css';

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
            <div className="background-open-menu">
              <div className="header">
                <Link to="/">
              <img src={logo} className="logo" alt="logo" />            
              </Link>
              </div>
              <div className="animated fadeIn menu">
                <div>                  
                <i onClick={this.toggleMenu} className="fa fa-times fa-3x menu-icon" aria-hidden="true"></i>
                  <Link to="/"  onClick={this.toggleMenu} >
                    <a className="menu-text">Home</a>
                  </Link>
                  <Link to="/about"  onClick={this.toggleMenu} >
                    <a className="menu-text">About Us</a>
                  </Link>
                  <Link to="/services"  onClick={this.toggleMenu} >
                    <a className="menu-text">Services</a>
                  </Link>
                  <Link to="/barbers"  onClick={this.toggleMenu} >
                    <a className="menu-text">Barbers</a>
                  </Link>

                  <a className="menu-text" href='https://squareup.com/appointments/book/Y198W1RSEFMSW/tbi'>Booking</a>
                  
                  {/*<Link to="/store" onClick={this.toggleMenu} >
                    <a className="menu-text">Store</a>
                  </Link>*/}
                  <Link to="/members"  onClick={this.toggleMenu} >
                    <a className="menu-text">Members</a>
                  </Link>
                  {/*<Link to="/our_work"  onClick={this.toggleMenu} >
                    <a className="menu-text">Our Work</a>
                  </Link>
                  <Link to="/contact"  onClick={this.toggleMenu} >
                    <a className="menu-text">Contact</a>
                  </Link>*/}
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