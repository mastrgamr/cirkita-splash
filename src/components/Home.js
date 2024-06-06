import React, { Fragment } from 'react';
import AppSlider from './AppSlider'

import { Image, Grid } from 'semantic-ui-react'

import gplayBtn from '../images/gplay_badge.png';
import appStoreBtn from '../images/astore_badge.png';

const Home = () => {
  return (
    <Fragment>
        <div className="App-header">
          <Grid centered stackable verticalAlign='middle'>
            <Grid.Row columns={2}>
              <Grid.Column verticalAlign='middle'>
                <AppSlider />
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <h2 style={{
                    display: "block",
                    paddingLeft: "16px"
                  }}>
                  A way around.
                </h2>
                <div>
                <a href="https://cirkita.link/android">
                  <Image centered src={gplayBtn} size='small' />
                </a>
                </div>
                <div>
                  {/* <Image src={appStoreBtn} size='small' /> */}
                  <p>App Store Coming Soon</p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {/* <Divider />
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
                <Grid.Column width={3}>
                  <Modal trigger={<Button fluid>Privacy Policy</Button>} closeIcon>
                    <Modal.Header>Privacy Policy</Modal.Header>
                    <Modal.Content scrolling>
                      <Modal.Description>
                        
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container> */}
        </div>
    </Fragment>
  );
}

export default Home;
