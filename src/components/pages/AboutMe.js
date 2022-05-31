import React from 'react';
import { Card, Button, Container, Row, Col, Text} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faList } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../styles/AboutMe.css'

import headshot from './images/patrick.jpg'

export default function AboutMe() {

  return (
    <Container sm>
      <Col>
        <Text h1>About Me</Text>
        <Row id="row-with-stuff">
          <Card id="headshotcard" cover>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    Patrick F. Ham
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  src={headshot}
                  width="100%"
                  alt="Card example background"
                />
              </Card.Body>
              <Card.Footer
                blur
                css={{
                  bgBlur: "#ffffff",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Row justify="space-evenly">
                      <Button ghost auto rounded color="primary" id="github"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://github.com/PatrickFHam', "_blank");
                          }}>
                        <Text
                          css={{ color: "inherit" }}
                          size={24}
                          weight="bold"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </Text>
                      </Button>
                      <Button ghost auto rounded color="primary" id="email"
                        onClick={() => window.location = 'mailto:patrick.f.ham@gmail.com'}>
                        <Text
                          css={{ color: "inherit" }}
                          size={24}
                          weight="bold"
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </Text>
                      </Button>
                      <Button ghost auto rounded color="primary" id="twitter"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://twitter.com/PatrickFHam', "_blank");
                          }}>
                        <Text
                          css={{ color: "inherit" }}
                          size={24}
                          weight="bold"
                        >
                          <FontAwesomeIcon icon={faTwitter} />
                        </Text>
                      </Button>
                    </Row>
                    <Row justify="space-evenly">
                      <Button ghost auto rounded color="primary" id="linkedin"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://www.linkedin.com/in/patrickfham/', "_blank");
                          }}>
                        <Text
                          css={{ color: "inherit" }}
                          size={24}
                          weight="bold"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </Text>
                      </Button>
                      <Button ghost auto rounded color="primary" id="facebook"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('http://www.facebook.com/patrickfham', "_blank");
                          }}>
                        <Text
                          css={{ color: "inherit" }}
                          size={24}
                          weight="bold"
                        >
                          <FontAwesomeIcon icon={faFacebook} />
                        </Text>
                      </Button>
                      <Button ghost auto rounded color="primary" id="resume">
                        <Text
                          css={{ color: "inherit" }}
                          size={24}
                          weight="bold"
                        >
                          <FontAwesomeIcon icon={faList} />
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
          </Card>
          
          <Col id="bio">
            <Text css={{ marginBottom: 15}}>Since I was seven years old, I have bounced back and forth between music and tech.  My toys were a Commodore64 and a 6' Kawaii grand piano.  On my childhood bookshelf was 'QBASIC for Dummies' and 'How to Write Better Orchestrations'.  I was automating with Visual Basic Macros before lunch, and engraving new piano arrangement after lunch.   I was writing chorales on days that I wasn't writing small programs, doing harmonic analysis right after I built a PC to sell to a friend's parents.</Text>
            <Text css={{ marginBottom: 15}}>I began an Information Systems degree when I finished high school in 2003.  Part-way through, I abandoned tech to seek a formal music degree.  Since then, for fifteen years, I've been a musician, mostly serving 'the church' which I still love. But it is time to shift back into tech, and allow music to remain a hobby and volunteer-work.  I'm excited to get back into the other of my first-loves.</Text>
            <Text css={{ marginBottom: 15}}>The skillset of a high-output musician is SUPER-useful in tech!  Writing orchestrations is nothing more than solving puzzles.  On the days that it's flowing, one commits themselves to the bench and gets the work done... ride the wave... just like coding!  I'm excited to learn more ways how my many years in music will benefit my new years in tech. </Text>
            <Text css={{ marginBottom: 15}}>Thank you for your time in reviewing my recent work and resume.  I look forward to answering any questions you have about my work and my journey back into the field of technology.</Text>
          </Col>

        </Row>
        
      </Col>
    </Container>
  );
}
