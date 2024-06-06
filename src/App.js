import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Label } from 'semantic-ui-react'

import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <nav id="menu">
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

export default App;
