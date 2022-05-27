import React from 'react';
import '../../styles/ResetSyles.css';
import '../../styles/RootStyles.css';
import '../../styles/Portfolio.css';

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
  
  return (
    <section>
      <h1>Portfolio</h1>
      <div className="allthecards" id="allthecards">
        {shownProjects.map(item => (
          <a
            key={item.id}
            href={item.githubLink}
            alt=""
            className="card cardmain">
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </a>
        ))}
      </div>
    </section>
)};
