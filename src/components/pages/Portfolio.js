import React from 'react';
import { Card, ButtonIcon, Button } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import '../../styles/Portfolio.css';

import {
  SpeedRunImage,
  WeatherDashboardImage,
  WorkdayPlannerImage,
  CodeQuizImage,
  PasswordGeneratorImage
} from '../pages/images'


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
  
  const iconContainerStyles = {
    width: '2.5rem',
    height: '2.5rem',
  };
  
  return (
    <section>
      <h1>Portfolio</h1>
      {shownProjects.map(item => (
      <div className="rainbow-m-around_large allthecards" id="allthecards">
          <Card
              key={item.id}
              style={{width: 300, height: 500}}
              icon={
                  <span
                      className="rainbow-background-color_success rainbow-border-radius_circle rainbow-align-content_center"
                      style={iconContainerStyles}
                  >
                      <FontAwesomeIcon icon={faGlobe} size="lg" className="rainbow-color_white" />
                  </span>
          }
              title={item.title}
              actions={<Button variant="neutral" label="Add" />}
              footer={
                  <div className="rainbow-align-content_space-between">
                      <div className="rainbow-flex">
                          <ButtonIcon
                              icon={<FontAwesomeIcon icon={faHeart} />}
                              className="rainbow-m-right_xx-small"
                              href={item.githubLink}
                          />
                          <ButtonIcon
                            icon={<FontAwesomeIcon icon={faShareAlt} />}
                            href={item.liveLink}
                          />
                      </div>
                      {/* <ButtonIcon icon={<FontAwesomeIcon icon={faAngleDown} />} /> */}
                  </div>
          }
          >
              <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                  <img src={item.image} alt=''/>
                  <h1 className="rainbow-p-top_small rainbow-font-size-heading_small">
                      {item.subtitle}
                  </h1>
              </div>
          </Card>
      </div>))}
    </section>
)};
