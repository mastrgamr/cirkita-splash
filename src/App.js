import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Label } from 'semantic-ui-react'

import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <nav id="menu">
          {/* <button aria-label="Show Menu" class="toggle-menu"></button> */}
          <Link id="logo" to="/">Cirkita <Label size="tiny">BETA</Label></Link>
          <Link to="/privacy">Privacy</Link>
        </nav>
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
