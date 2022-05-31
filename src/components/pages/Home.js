import React from 'react';
import { Card, Button, Container, Row, Col, Text} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faList } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../styles/Home.css'

import headshot from './images/patrick.jpg'

export default function Home() {

  return (
    <Container sm>
      <Col>
        <Text h1>Home</Text>
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
          
          <Col id="greeting">
            <Text h2>Hello, and welcome!</Text>
            <Text h3>I'm Patrick, a MERN full-stack developer.</Text>
            <Text h5>Here you can learn more about me, and what I've been working on, over the last 6 months.  With only a couple weeks left, I'll be finishing a coding bootcamp through Georgia Tech.  I've been sharpening some new tools, and I'm looking forward to putting them to good-use!</Text>
          </Col>

        </Row>
        
      </Col>
    </Container>
  );
}
