import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router } from 'react-router-dom'
import './index.css';
import 'semantic-ui-css/semantic.min.css'

import App from './App';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      {/* <Route path="/privacy" component={PrivacyPolicy} /> */}
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
