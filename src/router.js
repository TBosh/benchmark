import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './App.js';
import Home from './components/home/home.js';
import Barbers from './components/barbers/barbers.js';


export default (
    <Switch>
        <Route component={ Home } path="/" exact />
        <Route component={ Barbers } path="/Barbers" />
    </Switch>
)