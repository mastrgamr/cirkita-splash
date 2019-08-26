import React, { Fragment } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
// import PrivacyPolicy from './PrivacyPolicy'
import screenshot from '../images/tpScreenMock.jpg';

import { Button, Container, Divider, Grid } from 'semantic-ui-react'

const Home = () => {
  return (
    <Fragment>
        <header className="App-header">
          <p>Cirkita [Beta]</p>
          <img src={screenshot} className="App-logo" alt="logo" />
          <p>A simple transportation app.</p>
          <Divider />
          <Container>
            <Grid stackable divided centered row>
              <Grid.Row columns={2} textAlign='center'>
                <Grid.Column width={3}>
                  <a href="#">
                    <Button
                      fluid
                      animated='fade'>
                      <Button.Content visible>Download Soon</Button.Content>
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
        </header>
    </Fragment>
  );
}

export default Home;
