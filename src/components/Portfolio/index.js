import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Segment, Header, Divider, Card, Image, Icon } from 'semantic-ui-react';
import img1 from '../../images/Job-TrackR.png';
import img2 from '../../images/Stock-Tutorial.png';
import img3 from '../../images/Music-Buster.png';

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #37373b; }'}</style>
      </Helmet>
      <Grid container centered style={{ padding: '10em 3em' }}>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 1500 }}>
            <Segment textAlign="center" style={{ backgroundColor: 'silver' }}>
              <Header style={{ textDecoration: 'underline', fontSize: '48px' }}>Portfolio</Header>
              <Divider />
              <Grid textAlign="center" verticalAlign="middle">
                <Grid.Row columns={3}>
                  <Header style={{ fontSize: '36px' }}>Projects</Header>
                  <Grid.Column width={16}>
                    <Card.Group>
                      <Card centered raised>
                        <Image src={img1} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Job TrackR</Card.Header>
                          <Card.Meta>
                            <span className="date">03/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Search various jobs, track your job applications, view trending salary data, and live chat with other applicants
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Job-TrackR" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://calm-badlands-38225.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img2} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Stock Tutorial</Card.Header>
                          <Card.Meta>
                            <span className="date">05/11/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Basic interactive and educational experience of the stock market trade through analyzing a variety of real-time stock data and emulating a stock portfolio
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Stock-Tutorial" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://boiling-mesa-48982.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img3} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Music Buster</Card.Header>
                          <Card.Meta>
                            <span className="date">04/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Obtain all kinds of cool information regarding an artist, including their discography, social media links, most loved tracks, music video links, etc
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Music-Buster" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Music-Buster/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GitHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid textAlign="center" verticalAlign="middle">
                <Grid.Row columns={3}>
                  <Header style={{ fontSize: '36px' }}>Other Apps</Header>
                  <Grid.Column width={16}>
                    <Card.Group>
                      <Card centered raised>
                        <Image src={img1} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Job TrackR</Card.Header>
                          <Card.Meta>
                            <span className="date">03/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Search various jobs, track your job applications, view trending salary data, and live chat with other applicants
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Job-TrackR" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://calm-badlands-38225.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img2} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Stock Tutorial</Card.Header>
                          <Card.Meta>
                            <span className="date">05/11/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Basic interactive and educational experience of the stock market trade through analyzing a variety of real-time stock data and emulating a stock portfolio
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Stock-Tutorial" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://boiling-mesa-48982.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img3} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Music Buster</Card.Header>
                          <Card.Meta>
                            <span className="date">04/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Obtain all kinds of cool information regarding an artist, including their discography, social media links, most loved tracks, music video links, etc
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Music-Buster" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Music-Buster/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GitHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                    <Card.Group>
                      <Card centered raised>
                        <Image src={img1} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Job TrackR</Card.Header>
                          <Card.Meta>
                            <span className="date">03/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Search various jobs, track your job applications, view trending salary data, and live chat with other applicants
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Job-TrackR" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://calm-badlands-38225.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img2} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Stock Tutorial</Card.Header>
                          <Card.Meta>
                            <span className="date">05/11/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Basic interactive and educational experience of the stock market trade through analyzing a variety of real-time stock data and emulating a stock portfolio
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Stock-Tutorial" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://boiling-mesa-48982.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img3} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Music Buster</Card.Header>
                          <Card.Meta>
                            <span className="date">04/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Obtain all kinds of cool information regarding an artist, including their discography, social media links, most loved tracks, music video links, etc
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Music-Buster" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Music-Buster/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GitHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                    <Card.Group>
                      <Card centered raised>
                        <Image src={img1} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Job TrackR</Card.Header>
                          <Card.Meta>
                            <span className="date">03/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Search various jobs, track your job applications, view trending salary data, and live chat with other applicants
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Job-TrackR" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://calm-badlands-38225.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img2} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Stock Tutorial</Card.Header>
                          <Card.Meta>
                            <span className="date">05/11/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Basic interactive and educational experience of the stock market trade through analyzing a variety of real-time stock data and emulating a stock portfolio
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Stock-Tutorial" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://boiling-mesa-48982.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img3} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Music Buster</Card.Header>
                          <Card.Meta>
                            <span className="date">04/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Obtain all kinds of cool information regarding an artist, including their discography, social media links, most loved tracks, music video links, etc
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Music-Buster" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Music-Buster/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GitHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                    <Card.Group>
                      <Card centered raised>
                        <Image src={img1} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Job TrackR</Card.Header>
                          <Card.Meta>
                            <span className="date">03/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Search various jobs, track your job applications, view trending salary data, and live chat with other applicants
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Job-TrackR" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://calm-badlands-38225.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img2} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Stock Tutorial</Card.Header>
                          <Card.Meta>
                            <span className="date">05/11/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Basic interactive and educational experience of the stock market trade through analyzing a variety of real-time stock data and emulating a stock portfolio
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/shahidlashari/Stock-Tutorial" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://boiling-mesa-48982.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={img3} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Music Buster</Card.Header>
                          <Card.Meta>
                            <span className="date">04/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Obtain all kinds of cool information regarding an artist, including their discography, social media links, most loved tracks, music video links, etc
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Music-Buster" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Music-Buster/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GitHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                    </Card.Group>
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

export default Portfolio;
