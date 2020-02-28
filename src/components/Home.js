import React, { Fragment } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
// import PrivacyPolicy from './PrivacyPolicy'
import AppSlider from './AppSlider'
import screenshot from '../images/tpScreenMock.jpg';

import { Button, Container, Divider, Grid, Label, Header } from 'semantic-ui-react'

const Home = () => {
  return (
    <Fragment>
        <div className="App-header">
          <Header as='h1'>Cirkita<Label size="small">BETA</Label></Header>
          {/* <img src={screenshot} className="App-logo" alt="logo" /> */}
          <AppSlider />
          <p>A way around.</p>
          <Divider />
          <Container>
            <Grid stackable divided centered row="true">
              <Grid.Row columns={2} textAlign='center'>
                <Grid.Column width={3}>
                  <a href="https://bit.ly/cirkita-android">
                    <Button
                      fluid
                      animated='fade'>
                      <Button.Content visible>Download</Button.Content>
                      <Button.Content hidden>via Google Play Store</Button.Content>
                    </Button>
                  </a>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Link to="/privacy">
                    <Button fluid>
                      <Button.Content visible>Privacy Policy</Button.Content>
                    </Button>
                  </Link>
                </Grid.Column>
                {/* <Grid.Column width={3}>
                  <Modal trigger={<Button fluid>Privacy Policy</Button>} closeIcon>
                    <Modal.Header>Privacy Policy</Modal.Header>
                    <Modal.Content scrolling>
                      <Modal.Description>
                        <PrivacyPolicy />
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Grid.Column> */}
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    </Fragment>
  );
}

export default Home;
