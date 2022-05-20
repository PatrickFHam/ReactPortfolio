import React, { Component } from 'react';

// import SpeedRunImage from './images/speedrun-bg-sonic.png'

import {
  SpeedRunImage,
  WeatherDashboardImage,
  WorkdayPlannerImage,
  CodeQuizImage,
  PasswordGeneratorImage
} from '../pages/images'

import { Card, Button } from 'react-bootstrap'

const shownProjects = [
  {
    id: 1,
    title: "SpeedRun Spectator",
    subtitle: "3rd-Party-APIs / Javascript / Bootstrap",
    githubLink: "https://github.com/PatrickFHam/SpeedRunSpectator",
    liveLink: "https://patrickfham.github.io/SpeedRunSpectator/",
    image: SpeedRunImage,
    cardSize: 'card-big'
  },
  {
    id: 2,
    title: "Weather Dashboard",
    subtitle: "3rd-Party-APIs / Javascript / Bootstrap",
    githubLink: "https://github.com/PatrickFHam/WeatherDashboard",
    liveLink: "https://patrickfham.github.io/WeatherDashboard/",
    image: WeatherDashboardImage,
    cardSize: 'card-big'
  },
  {
    id: 3,
    title: "Workday Planner",
    subtitle: "Javascript / Bootstrap",
    githubLink: "https://github.com/PatrickFHam/WorkdayScheduler",
    liveLink: "https://patrickfham.github.io/WorkdayScheduler/",
    image: WorkdayPlannerImage,
    cardSize: 'card-med'
  },
  {
    id: 4,
    title: "Code Quiz",
    subtitle: "Javascript / CSS",
    githubLink: "https://github.com/PatrickFHam/CodeQuiz",
    liveLink: "https://patrickfham.github.io/CodeQuiz",
    image: CodeQuizImage,
    cardSize: 'card-med'
  },
  {
    id: 5,
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
    <div>
      <h1>Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
      <section id="allthecards">
      {shownProjects.map(item => (
        <Card key={item.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
          {item.subtitle}
          </Card.Text>
          <Button href={item.githubLink} target='blank' variant="primary">See on GitHub</Button>
          <Button href={item.liveLink} target='blank' variant="success">See it LIVE</Button>
        </Card.Body>
      </Card>
      ))}
        
      </section>
    </div>
  );
}
