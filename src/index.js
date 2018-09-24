import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Login from "./components/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Test from "./components/Test";

ReactDOM.render(<Router>
  <div>
    <Route exact path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/test" component={Test}/>
  </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
