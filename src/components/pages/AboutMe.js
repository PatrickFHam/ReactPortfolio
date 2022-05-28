import React from 'react';
import { Card, Button, Container, Row, Col, Text, Image } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faList } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import headshot from './images/patrick.jpg'

export default function AboutMe() {

  return (
    <Container>
      <Col>
        <Text h1>About Me</Text>
        <Row flex="flex-auto">
          <Card cover css={{ maxHeight: 500, maxWidth: 400}}>
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
          
          <Col css={{ marginLeft: 15 }}>
            <Text css={{ marginBottom: 15}}>There has always been pendulum swing between tech and music.  I grew up with a Commodore64, a 486sx, then a 486dx... all while reading books on BASIC, Visual Basic, and other programming languages.  I was writing chorales on days that I wasn't writing small programs, doing harmonic analysis right after I built a PC to sell.</Text>
            <Text css={{ marginBottom: 15}}>I began an Information Systems degree in 2003.  Part-way through, I abandoned tech to seek a formal music degree.  Since then, for fifteen years, I've been a musician, mostly serving 'the church' which I still love. It's time to make music my ministry and hobby; it's time to make technology the career and livelihood.  I'm excited to get back into another of my first-loves.</Text>
            <Text css={{ marginBottom: 15}}>Thank you for your time in reviewing my recent work and resume.  I look forward to answering any questions you have about my work and my journey back into the field of technology.</Text>
          </Col>

        </Row>
        
      </Col>
    </Container>
  );
}
