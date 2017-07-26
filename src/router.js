import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './App.js';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import Barbers from './components/barbers/barbers.js';
import Store from './components/store/store.js';
import Booking from './components/booking/booking.js';
import Ourwork from './components/ourwork/ourwork.js';


export default (
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
        <Route component={ Home } path="/" exact />
        <Route component={ About } path="/About" />
        <Route component={ Barbers } path="/Barbers" />
        <Route component={ Store } path="/Store" />
        <Route component={ Booking } path="/Booking" />
        <Route component={ Ourwork } path="/Ourwork" />
    </Switch>
)