import React, { Component } from 'react';
import PrivacyPolicy from './components/PrivacyPolicy'
import screenshot from './images/tpScreenMock.jpg';
import './App.css';

import { Button, Container, Divider, Grid, Modal } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Transit Pulse [Beta]</p>
          <img src={screenshot} className="App-logo" alt="logo" />
          <p>A transportation app.</p>
          <Divider />
          <Container>
            <Grid stackable divided centered row>
              <Grid.Row columns={2} textAlign='center'>
                <Grid.Column width={3}>
                  <a href="#">
                    <Button
                      fluid
                      animated='fade'>
                      <Button.Content visible>Download</Button.Content>
                      <Button.Content hidden>via Google Play Store</Button.Content>
                    </Button>
                  </a>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Modal trigger={<Button fluid>Privacy Policy</Button>} closeIcon>
                    <Modal.Header>Privacy Policy</Modal.Header>
                    <Modal.Content scrolling>
                      <Modal.Description>
                        <PrivacyPolicy />
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
