import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
// import config from './config.js';

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const massive = require('massive');
// const connectionString = config.connectionString;

// const app = express();
// app.use(  bodyParser.json() );
// app.use( cors() );

// const port = 3000;
// app.listen( port, () => { console.log(`Server is listening on port ${port}.`); } );


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
