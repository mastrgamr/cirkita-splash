import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Label } from 'semantic-ui-react'

import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav id="menu">
          {/* <button aria-label="Show Menu" class="toggle-menu"></button> */}
          <a id="logo" href="/">Cirkita <Label size="tiny">BETA</Label></a>
          <a href="/privacy">Privacy</a>
        </nav>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/privacy" component={PrivacyPolicy} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
