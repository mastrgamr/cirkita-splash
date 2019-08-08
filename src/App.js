import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/privacy" component={PrivacyPolicy} />
      </div>
    );
  }
}

export default App;
