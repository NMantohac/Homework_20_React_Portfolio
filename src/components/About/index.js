import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Segment, Header, Image, Divider, List, Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import pfp1 from '../../images/pfp1.jpg';

const About = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #37373b; }'}</style>
      </Helmet>
      <Grid container centered style={{ padding: '10em 3em' }}>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 1000 }}>
            <Segment textAlign="center" style={{ backgroundColor: 'silver' }}>
              <Header style={{ textDecoration: 'underline', fontSize: '48px' }}>About Me</Header>
              <Divider />
              <Grid verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Grid centered>
                      <Image src={pfp1} height="300" width="300" style={{ marginTop: '20px' }} />
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid textAlign="left">
                <Grid.Row columns={1}>
                  <Grid.Column width={16} style={{ marginLeft: '20px' }}>
                    <p style={{ fontSize: '20px' }}>I am a senior student at UC Berkeley that took a year off in order to pursue my interest in web development and programming in general.</p>
                    <p style={{ fontSize: '20px' }}>Little did I know that my interest grew into a passion during the time I was in the the UC Berkeley Extension Web Development Bootcamp. After I graduated from the program, I have continued to sharpen my skills as a Full-Stack Developer and have been starting to look into more languages such as Java/Python/C++/etc.</p>
                    <p style={{ fontSize: '20px' }}>My major was Chemical Biology in the College of Chemistry, but I plan on continuing my education at UC Berkeley by switching into Computer Science in the College of Letters & Science or the College of Electrical Engineering and Computer Sciences, and obtain a CS degree.</p>
                    <p style={{ fontSize: '20px' }}>My overall goal and career-work is Software Engineering, as well as Video Game Design & Development somewhere down the line, using game engines such as Unity and/or Unreal Engine 4. I also have interest in creating art/animation through the graphics software, Blender. I really hope that I can become a skilled game developer that has worked on major AAA titles in the future!</p>
                    <Header as="h1" style={{ fontSize: '36px' }}>Contact Info</Header>
                    <List animated verticalAlign="middle">
                      <List.Item>
                        <List.Content style={{ fontSize: '20px' }}>
                          <Icon name="mail" />
                          <strong>Email: </strong>
                          <a href="mailto:nmantohac82098@gmail.com">nmantohac82098@gmail.com</a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content style={{ fontSize: '20px' }}>
                          <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '8px' }} />
                          <strong>Facebook: </strong>
                          <a href="https://www.facebook.com/profile.php?id=100007694470572" target="_blank" rel="noopener noreferrer">Norberto Mantohac Jr</a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content style={{ fontSize: '20px' }}>
                          <Icon name="github" />
                          <strong>GitHub: </strong>
                          <a href="https://github.com/NMantohac" target="_blank" rel="noopener noreferrer">NMantohac</a>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default About;
