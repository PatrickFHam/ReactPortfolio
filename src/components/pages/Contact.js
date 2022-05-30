import React from 'react';
import { Button, Container, Col, Text, Row } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faList, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Form from './ContactForm';
import '../../styles/Contact.css';

export default function Contact(props) {

  return (
    <Container>
      <Col>
        <h1>Contact Me</h1>
        <Text>
          It would make my day to connect with you!  I'd love to talk about the projects you're working on, and what you've been learning in the process.  I learn something new with every interaction... so I definitely look forward to making contact!
        </Text>
        <Text css={{ marginBottom: 15 }}>
          Feel free to use any of the methods below to contact me.  I'm reacheable, always.
        </Text>

        <Row fluid="true" AlignItems='stretch' Justify='space-evenly'>
          <Container AlignItems='stretch' id="list-of-contact-methods">
            <Button ghost auto rounded color="primary" id="github"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/PatrickFHam', "_blank");
                }}>
              <Text
                css={{ color: "inherit" }}
                size={16}
                weight="bold"
              >
                <FontAwesomeIcon icon={faGithub} />  PM me on GitHub
              </Text>
            </Button>
            <Button ghost auto rounded color="primary" id="email"
              onClick={() => window.location = 'mailto:patrick.f.ham@gmail.com'}>
              <Text
                css={{ color: "inherit" }}
                size={16}
                weight="bold"
              >
                <FontAwesomeIcon icon={faEnvelope} />  Shoot Me an Email
              </Text>
            </Button>
            <Button ghost auto rounded color="primary" id="twitter"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://twitter.com/PatrickFHam', "_blank");
                }}>
              <Text
                css={{ color: "inherit" }}
                size={16}
                weight="bold"
              >
                <FontAwesomeIcon icon={faTwitter} />  Tweet @ Me!
              </Text>
            </Button>

            <Button ghost auto rounded color="primary" id="linkedin"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/patrickfham/', "_blank");
                }}>
              <Text
                css={{ color: "inherit" }}
                size={16}
                weight="bold"
              >
                <FontAwesomeIcon icon={faLinkedin} />  PM me on LinkedIn
              </Text>
            </Button>
            <Button ghost auto rounded color="primary" id="facebook"
              onClick={(e) => {
                e.preventDefault();
                window.open('http://www.facebook.com/patrickfham', "_blank");
                }}>
              <Text
                css={{ color: "inherit" }}
                size={16}
                weight="bold"
              >
                <FontAwesomeIcon icon={faFacebook} />  PM me on Facebook
              </Text>
            </Button>
            <Button solid="true" auto rounded color="gradient" id="resume" onClick={(e) => {props.setCurrentPage('Resume')}}>
              <Text
                css={{ color: "inherit" }}
                size={16}
                weight="bold"
              >
                <FontAwesomeIcon icon={faList} />  Review My Resume First? *wink
              </Text>
            </Button>
            <Button solid="true" auto rounded color="gradient" id="resume" onClick={(e) => {props.setCurrentPage('Portfolio')}}>
              <Text
                css={{ color: "inherit" }}
                size={16}
                weight="bold"
              >
                <FontAwesomeIcon icon={faFolder} />  See My Portfolio First? *wink
              </Text>
            </Button>
          </Container>
            
          <Container responsive="true" AlignItems='stretch'>
            <Form />
          </Container>

        </Row>
      </Col>
    </Container>
  );
}
