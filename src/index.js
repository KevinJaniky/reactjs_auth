import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Login from "./components/Auth/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(<Router>

  <div>
    <Route exact path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/test" component={App}/>
    <Route path="/teams" component={App}/>
    <Route path="/create" component={App}/>
  </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
