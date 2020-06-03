import React from 'react';
import { Segment, Container, Grid, Header, Image, List, Divider, Icon } from 'semantic-ui-react';
import pfp from '../../images/pfp.png';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ position: 'absolute', bottom: '0', width: '100%' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as="h1" inverted content="Placeholder" />
              <p>
                Placeholder
              </p>
              <p>
                Placeholder
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h3" content="Get Started" />
              <p>Placeholder</p>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as="h3" content="Contact Us" />
              <List link inverted selection animated>
                <List.Item>
                  <List.Icon name="mail" />
                  <List.Content>
                    <a href="mailto:nmantohac82098@gmail.com">
                      Send Feedback
                    </a>
                  </List.Content>
                </List.Item>
              </List>
              <Grid.Row>
                <List link inverted horizontal selection>
                  <Header inverted as="h3" content="GitHub" />
                  <List.Item>
                    <a href="https://github.com/NMantohac" target="_blank" rel="noopener noreferrer">
                      <Image src={pfp} circular width="65" height="65" />
                    </a>
                  </List.Item>
                </List>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          <Divider />
        </Grid>
        <Segment textAlign="center" inverted style={{ background: '#37373b' }}>
          <Icon name="copyright outline" style={{ marginLeft: '3px' }} />
          Copyright 2020. All rights reserved.
        </Segment>
      </Container>
    </Segment>
  );
};

export default Footer;
