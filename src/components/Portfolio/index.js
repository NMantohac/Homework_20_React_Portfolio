import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Segment, Header, Divider, Card, Image, Icon } from 'semantic-ui-react';
import JobTrackR from '../../images/Job-TrackR.png';
import StockTutorial from '../../images/Stock-Tutorial.png';
import MusicBuster from '../../images/Music-Buster.png';
import UserDirectory from '../../images/User-Directory.png';
import FitnessTracker from '../../images/Fitness-Tracker.png';
import EmployeeManagementSystem from '../../images/Employee-Management-System.png';
import NoteTaker from '../../images/Note-Taker.png';
import TeamProfileGenerator from '../../images/Team-Profile-Generator.png';
import GoodREADMEGenerator from '../../images/Good-README-Generator.png';
import WeatherDashboard from '../../images/Weather-Dashboard.png';
import DayPlanner from '../../images/Day-Planner.png';
import CodeQuiz from '../../images/Code-Quiz.png';
import PasswordGenerator from '../../images/Password-Generator.png';
import ResponsivePortfolio from '../../images/Responsive-Portfolio.png';
import CodeRefactor from '../../images/Code-Refactor.png';

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
                        <Image src={JobTrackR} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Job TrackR</Card.Header>
                          <Card.Meta>
                            <span className="date">06/02/20</span>
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
                        <Image src={StockTutorial} wrapped ui={false} />
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
                        <Image src={MusicBuster} wrapped ui={false} />
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
                        <Image src={UserDirectory} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>User Directory</Card.Header>
                          <Card.Meta>
                            <span className="date">05/22/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A user/employee directory that allows the user to view an entire list of employees and provides quick access to their information
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/User-Directory" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac-user-directory.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Netlify
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={FitnessTracker} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Fitness Tracker</Card.Header>
                          <Card.Meta>
                            <span className="date">05/17/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A fitness tracker that allows the user to create a new workout between a resistance (weights) or cardio exercise type through a small form
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Fitness-Tracker" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://fast-cove-36874.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={EmployeeManagementSystem} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Employee Management System</Card.Header>
                          <Card.Meta>
                            <span className="date">05/01/20</span>
                          </Card.Meta>
                          <Card.Description>
                            An employee management system that displays data or does a certain function based on the user's choice out of a list in the main prompt, which utilizes Inquirer (npm)
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Employee-Management-System" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                    <Card.Group>
                      <Card centered raised>
                        <Image src={NoteTaker} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Note Taker</Card.Header>
                          <Card.Meta>
                            <span className="date">04/25/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A note taker that allows the user to write, save, and delete notes from the webpage
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Note-Taker" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://rocky-mountain-40878.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            Heroku
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={TeamProfileGenerator} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Team Profile Generator</Card.Header>
                          <Card.Meta>
                            <span className="date">04/19/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A team profile generator that renders an HTML page based on the user's answers to a series of prompts utilizing Inquirer (npm)
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Team-Profile-Generator" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={GoodREADMEGenerator} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Good README Generator</Card.Header>
                          <Card.Meta>
                            <span className="date">04/15/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A README.md generator that dynamically generates a README.md file after running npm install and node index.js
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Good-README-Generator" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                    <Card.Group>
                      <Card centered raised>
                        <Image src={WeatherDashboard} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Weather Dashboard</Card.Header>
                          <Card.Meta>
                            <span className="date">04/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A weather dashboard that searches up a city name and displays the current weather for that city, along with the a 5-day forecast
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GitHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={DayPlanner} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Day Planner</Card.Header>
                          <Card.Meta>
                            <span className="date">04/02/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A day planner that contains time blocks of a standard day and allows the user to input text, and save it after clicking on the save button and refreshing the page
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Day-Planner" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Day-Planner/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GtiHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={CodeQuiz} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Code Quiz</Card.Header>
                          <Card.Meta>
                            <span className="date">03/29/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A videogame quiz that contains questions regarding to general videogame knowledge and specific titles/series
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Code-Quiz" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GitHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                    <Card.Group>
                      <Card centered raised>
                        <Image src={PasswordGenerator} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Password Generator</Card.Header>
                          <Card.Meta>
                            <span className="date">03/22/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A password generator that generates a random password based on the criteria of the password length and character types
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Password-Generator" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GitHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={ResponsivePortfolio} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Responsive Portfolio</Card.Header>
                          <Card.Meta>
                            <span className="date">03/17/20</span>
                          </Card.Meta>
                          <Card.Description>
                            A simple 'About Me' website layout that incldues semantic HTML tags and a navbar that contains the links to 'About/Portfolio/Contact' pages. The website is also a responsive layout for mobile screens, which means that the elements are nicely fit in different screens sizes.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Responsive-Portfolio" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Responsive-Portfolio/" target="_blank" rel="noopener noreferrer">
                            <Icon name="window maximize" style={{ marginLeft: '2em' }} />
                            GiitHub Pages
                          </a>
                        </Card.Content>
                      </Card>
                      <Card centered>
                        <Image src={CodeRefactor} wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>Code Refactor</Card.Header>
                          <Card.Meta>
                            <span className="date">03/13/20</span>
                          </Card.Meta>
                          <Card.Description>
                            Clean up of an example website page's code in both HTML and CSS, so it's more presentable and accessible to look at for others
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/NMantohac/Code-Refactor" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                            GitHub
                          </a>
                          <a href="https://nmantohac.github.io/Code-Refactor/" target="_blank" rel="noopener noreferrer">
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
