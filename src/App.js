import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import router from './router';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div> 
        <Navbar/>
        <div>
          {router}
        </div>
      </div>
    );
  }
}

export default App;
