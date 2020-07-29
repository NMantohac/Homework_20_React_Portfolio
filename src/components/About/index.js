import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Segment, Header, Image, Divider, List, Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Me from '../../images/Me.jpg';

const About = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #37373b; }'}</style>
      </Helmet>
      <Grid container centered style={{ padding: '7em 1em' }}>
        <Grid.Row>
          <Grid.Column>
            <Segment textAlign="center" style={{ backgroundColor: 'silver' }}>
              <Header style={{ fontSize: '48px' }}>About Me</Header>
              <Divider />
              <Grid verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Grid centered>
                      <Image src={Me} style={{ marginTop: '20px' }} />
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
                    <p style={{ fontSize: '20px' }}>A certified Full-Stack Developer with a passion of learning new technologies, and finding opportunities to always improve on my skill set.</p>
                    <p style={{ fontSize: '20px' }}>An active member in several web development communities, where I not only help beginner programmers by debugging their code or providing resources and tips, but most importantly, learning along with other hard-working and passionate developers to strongly encourage an optimal learning environment.</p>
                    <p style={{ fontSize: '20px' }}>Worked on projects, in which I was unanimously chosen as a leader. Inexperienced at first, but I quickly grew comfortable with the people around me, and discovered that I love to actively support my team members and bring forth creative ideas. This allowed for the overall improvement of each project's quality and standard.</p>
                    <p style={{ fontSize: '20px' }}>Attended UC Berkeley as an undergraduate in the College of Chemistry with an intended B.S. degree in Chemical Biology . </p>
                    <p style={{ fontSize: '20px' }}>Other Interests: Python and C++/C#, Video Game Design & Development with Unity or Unreal Engine 4, Art/Animation with the graphics software, Blender. </p>
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
                          <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: '2px' }} />
                          <strong style={{ marginLeft: '8px' }}>LinkedIn: </strong>
                          <a href="https://www.linkedin.com/in/norberto-mantohac-40514b1a2/" target="_blank" rel="noopener noreferrer">Norberto Mantohac</a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content style={{ fontSize: '20px' }}>
                          <Icon name="github" />
                          <strong>GitHub: </strong>
                          <a href="https://github.com/NMantohac" target="_blank" rel="noopener noreferrer">NMantohac</a>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content style={{ fontSize: '20px' }}>
                          <FontAwesomeIcon icon={faFacebook} style={{ marginLeft: '2px' }} />
                          <strong style={{ marginLeft: '5px' }}>Facebook: </strong>
                          <a href="https://www.facebook.com/profile.php?id=100007694470572" target="_blank" rel="noopener noreferrer">Norberto Mantohac Jr</a>
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
