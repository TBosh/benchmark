import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import router from './router';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div> 
        <div className="filler"></div>
        <div>
          {router}
        </div>
        <Navbar/>
      </div>
    );
  }
}

export default App;
