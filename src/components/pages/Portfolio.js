import React from 'react';
import { Card, Button, Container, Row, Col, Text } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../../styles/Portfolio.css';

import {
  SpeedRunImage,
  WeatherDashboardImage,
  WorkdayPlannerImage,
  CodeQuizImage,
  PasswordGeneratorImage,
  Bookshelf
} from '../pages/images'


const shownProjects = [
  {
    id: 1,
    title: "The Shelf, by the Good Neighbors",
    subtitle: "Handlebars / Javascript / Bootstrap / HTML / CSS",
    githubLink: "https://github.com/PatrickFHam/Good-Neighbor",
    liveLink: "https://pure-cliffs-09110.herokuapp.com/",
    image: Bookshelf,
    cardSize: 'card-big'
  },
  {
    id: 2,
    title: "SpeedRun Spectator",
    subtitle: "3rd-Party-APIs / Javascript / Bootstrap",
    githubLink: "https://github.com/PatrickFHam/SpeedRunSpectator",
    liveLink: "https://patrickfham.github.io/SpeedRunSpectator/",
    image: SpeedRunImage,
    cardSize: 'card-big'
  },
  {
    id: 3,
    title: "Weather Dashboard",
    subtitle: "3rd-Party-APIs / Javascript / Bootstrap",
    githubLink: "https://github.com/PatrickFHam/WeatherDashboard",
    liveLink: "https://patrickfham.github.io/WeatherDashboard/",
    image: WeatherDashboardImage,
    cardSize: 'card-big'
  },
  {
    id: 4,
    title: "Workday Planner",
    subtitle: "Javascript / Bootstrap",
    githubLink: "https://github.com/PatrickFHam/WorkdayScheduler",
    liveLink: "https://patrickfham.github.io/WorkdayScheduler/",
    image: WorkdayPlannerImage,
    cardSize: 'card-med'
  },
  {
    id: 5,
    title: "Code Quiz",
    subtitle: "Javascript / CSS",
    githubLink: "https://github.com/PatrickFHam/CodeQuiz",
    liveLink: "https://patrickfham.github.io/CodeQuiz",
    image: CodeQuizImage,
    cardSize: 'card-med'
  },
  {
    id: 6,
    title: "Password Generator",
    subtitle: "Javascript",
    githubLink: "https://github.com/PatrickFHam/PasswordGenerator",
    liveLink: "https://patrickfham.github.io/PasswordGenerator/",
    image: PasswordGeneratorImage,
    cardSize: 'card-small'
  },
]

export default function Portfolio() {

  
  return (
    <Container>
      <h1>Portfolio</h1>
      <Row gap={1} wrap="wrap" id="allthecards">
        {shownProjects.map(item => (
          <Card key={item.id} cover css={{ marginTop: 7, marginBottom: 7}}>
            <Card.Header blur="true" css={{ backgroundColor: "grey", position: "absolute", zIndex: 1, top: 0 }}>
              <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                  {item.subtitle}
                </Text>
                <Text h3 color="black">
                  {item.title}
                </Text>
              </Col>
            </Card.Header>
            <Card.Body>
              <Card.Image
                src={item.image}
                height={400}
                width="100%"
                alt=""
              />
            </Card.Body>
            <Card.Footer
              blur="true"
              css={{
                position: "absolute",
                bgBlur: "#000000",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Row justify="flex-end">
                    <Button ghost auto rounded color="primary" id="githublink" onClick={(e) => {
                          e.preventDefault();
                          window.open(`${item.githubLink}`, "_blank");
                          }}>
                      <Text
                        css={{ color: "inherit" }}
                        size={24}
                        weight="bold"
                        transform="uppercase"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </Text>
                    </Button>
                    <Button ghost auto rounded color="primary" id="livelink" onClick={(e) => {
                          e.preventDefault();
                          window.open(`${item.liveLink}`, "_blank");
                          }}>
                      <Text
                        css={{ color: "inherit" }}
                        size={24}
                        weight="bold"
                        transform="uppercase"
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        ))}
      </Row>
    </Container>
)};
