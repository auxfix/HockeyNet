﻿import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import reduxStore from './store/reduxStore';
import reducers from './reducers/index';
import main from './components/main';
import "video-react/dist/video-react.css";
import "../wwwroot/lib/bootstrap/dist/css/bootstrap.css";
import "../wwwroot/css/index.scss";

render((
  <Provider store={reduxStore}>
    <Router history={browserHistory}>
        <Route path="/" component={main}>
        </Route>
    </Router>
  </Provider>
), document.getElementById('root')); 
