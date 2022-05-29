import React from 'react';
import { Card, Button, Container, Row, Col, Text, Image, Spacer, Link } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faList, faFolder, faLink, faFileArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import resume from './pdf/Resume.pdf'

export default function Resume() {

  return (
    <Container>
      <h1>Resume . . . <Link href={resume} target="_blank"><FontAwesomeIcon icon={faFileArrowDown} /></Link> </h1>
      <Row>
        <Col>
          <Container>
            <Text h6>Focused and determined full-stack developer.  Formerly a departmental music director, composer, arranger, and volunteer-team builder, there is a unique blend of skills, including creative, procedural, technical, and collaborative. The ability to independently focus on details, and collaboratively synergize.</Text>

            <Spacer x={3}></Spacer>

            <Text h5>Technical Skills</Text>
            <Text h6>FrontEnd:</Text>
            <Text>React, Javascript, HTML, CSS</Text>
            <Text h6>BackEnd:</Text>
            <Text>nodeJS, ExpressJS, MySQL, MongoDB</Text>
            
            <Spacer x={3}></Spacer>

            <Text h5>Recent Training</Text>
            <Text h6>Georgia Tech Coding Bootcamp</Text>
            <Text>Full-Stack Web Development</Text>
            <Text h6>Completed</Text>
            <Text>June 15, 2022</Text>
          </Container>
        </Col>
          
        <Col>
          <Container>
            <Text h5>Contact Info</Text>
            <Text>156 Dixon Street</Text>
            <Text>Jonesboro, GA 30236</Text>
            <Text>(770)-596-2140</Text>
            <Text>patrick.f.ham@gmail.com</Text>
          </Container>

          <Spacer x={3}></Spacer>

          <Container>
            <Text h5>Online Presences</Text>
            <Text><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> - LinkedIn - <Link href="https://www.linkedin.com/in/patrickfham/" target="_blank">linkedin.com/in/patrickfham/ </Link></Text>
            <Text><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> - GitHub - <Link href="https://www.linkedin.com/in/patrickfham/" target="_blank">linkedin.com/in/patrickfham/ </Link></Text>
            <Text><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> - Twitter - <Link href="https://twitter.com/PatrickFHam" target="_blank">twitter.com/patrickfham/ </Link></Text>
            <Text><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> - Facebook - <Link href="https://www.facebook.com/patrickfham/" target="_blank">facebook.com/patrickfham/ </Link></Text>
            <Text><FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> - Portfolio - <Link href="#Portfolio" target="_blank">linkedin.com/in/patrickfham/ </Link></Text>
          </Container>

        </Col>
      </Row>

      <Spacer x={3}></Spacer>
      <Spacer x={3}></Spacer>
      <Spacer x={3}></Spacer>

      <Row>
        <Col>
          <Container>
            <Text h3>Employment History</Text>

            <Spacer x={3}></Spacer>

            <Text h4>First Baptist Church -- Jonesboro, Georgia</Text>
            <Text h5>Director of Instrumental Music, Music Director, Arranger, Orchestrator</Text>
            <Text h5>September 2015 - Present</Text>
            <Text h6>Associate to the Worship Pastor, director of all instrumental groups including a 6-piece band and 72-piece orchestra, rehearsal conductor, service conductor, concert conductor, composer, arranger, performer, team-builder, music-tech director. Balanced the creative with technical, administrative, and collaborative activities, weekly.</Text>

            <Spacer x={3}></Spacer>

            <Text h4>P.T.Hutchins Ltd., Ribelin, Azelis Americas -- Covington, Georgia</Text>
            <Text h5>Laboratory Technician</Text>
            <Text h5>June 2010 - January 2016</Text>
            <Text h6>Planned and executed multi-seasonal schedules in materials-testing. Calendaring, collaborating with other researchers in remote labs, data-entry,data-manipulation, data-analysis, presentation of ﬁndings, mostly technical but somewhat creative and technical.</Text>

            <Spacer x={3}></Spacer>

            <Text h4>Belmont Baptist Church -- Conyers, Georgia</Text>
            <Text h5>Director of Music Ministries, Music Director, Arranger</Text>
            <Text h5>December 2010 - September 2015</Text>
            <Text h6>Director of all music groups including adult, students’, and children’s choirs, as well as instrumentalists. Creative, technical, and admininstrative.</Text>

            <Spacer x={3}></Spacer>
            <Spacer x={3}></Spacer>
            <Spacer x={3}></Spacer>

          </Container>
          
          <Container>
            <Text h3>Relevant Projects</Text>
            
            <Spacer x={3}></Spacer>
            
            <Text h4>The Shelf, by the Good Neighbors</Text>
            <Text h5>"...your neighborhood's best book-borrowing shelf."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/Good-Neighbor" target="_blank"> github.com/PatrickFHam/Good-Neighbor </Link></Text>
            <Text h5>Deployed:  <Link href="https://pure-cliffs-09110.herokuapp.com/" target="_blank"> https://pure-cliffs-09110.herokuapp.com/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6>Handlebars, MySQL, Sequelize, Javascript, HTML, CSS, Bootstrap, Anime.js,jQuery, Node.js, Express.js, Popper.js</Text>

            <Spacer x={3}></Spacer>

            <Text h4>SpeedRun Spectator</Text>
            <Text h5>"...the fastest way to keep track fo your favorite SpeedRunners."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/SpeedRunSpectator" target="_blank"> github.com/PatrickFHam/SpeedRunSpectator </Link></Text>
            <Text h5>Deployed:  <Link href="https://patrickfham.github.io/SpeedRunSpectator/" target="_blank"> patrickfham.github.io/SpeedRunSpectator/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6>SpeedRun.com’s API, JavaScript, jQuery, HTML, CSS, Bootstrap</Text>

            <Spacer x={3}></Spacer>

            <Text h4>Weather Dashboard</Text>
            <Text h5>"...for quickly finding current and 5-day forecast weather data."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/WeatherDashboard" target="_blank">github.com/PatrickFHam/WeatherDashboard </Link></Text>
            <Text h5>Deployed:  <Link href="https://patrickfham.github.io/WeatherDashboard/" target="_blank">patrickfham.github.io/WeatherDashboard/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6> OpenWeather API, JavaScript, jQuery, HTML, CSS, Bootstrap</Text>

            <Spacer x={3}></Spacer>

            <Text h4>Code Quiz</Text>
            <Text h5>"...for knowing how much you know about coding."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/CodeQuiz" target="_blank"> github.com/PatrickFHam/CodeQuiz </Link></Text>
            <Text h5>Deployed:  <Link href="https://patrickfham.github.io/CodeQuiz/" target="_blank"> patrickfham.github.io/CodeQuiz/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6>Javascript, HTML, CSS</Text>

            <Spacer x={3}></Spacer>

            <Text h4>Workday Scheduler</Text>
            <Text h5>"... for keeping track of the current day's work activities."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/WorkdayScheduler" target="_blank"> github.com/PatrickFHam/SpeedRunSpectator </Link></Text>
            <Text h5>Deployed:  <Link href="https://patrickfham.github.io/WorkdayScheduler/" target="_blank"> patrickfham.github.io/WorkdayScheduler/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6>SpeedRun.com’s API, JavaScript, jQuery, HTML, CSS, Bootstrap</Text>


            <Spacer x={3}></Spacer>
            <Spacer x={3}></Spacer>
            <Spacer x={3}></Spacer>

          </Container>
        </Col>
      </Row>
    </Container>
  );
}
