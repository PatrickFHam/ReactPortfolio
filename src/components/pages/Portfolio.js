import React from 'react';
import {
  SpeedRunImage,
  WeatherDashboardImage,
  WorkdayPlannerImage,
  CodeQuizImage,
  PasswordGeneratorImage
} from '../pages/images'

const shownProjects = [
  {
    title: "SpeedRun Spectator",
    subtitle: "3rd-Party-APIs / Javascript / Bootstrap",
    githubLink: "https://github.com/PatrickFHam/SpeedRunSpectator",
    liveLink: "https://patrickfham.github.io/SpeedRunSpectator/",
    image: {SpeedRunImage}
  },
  {
    title: "Weather Dashboard",
    subtitle: "3rd-Party-APIs / Javascript / Bootstrap",
    githubLink: "https://github.com/PatrickFHam/WeatherDashboard",
    liveLink: "https://patrickfham.github.io/WeatherDashboard/",
    image: {WeatherDashboardImage}
  },
  {
    title: "Workday Planner",
    subtitle: "Javascript / Bootstrap",
    githubLink: "https://github.com/PatrickFHam/WorkdayScheduler",
    liveLink: "https://patrickfham.github.io/WorkdayScheduler/",
    image: {WorkdayPlannerImage}
  },
  {
    title: "Code Quiz",
    subtitle: "Javascript / CSS",
    githubLink: "https://github.com/PatrickFHam/CodeQuiz",
    liveLink: "https://patrickfham.github.io/CodeQuiz",
    image: {CodeQuizImage}
  },
  {
    title: "Password Generator",
    subtitle: "Javascript",
    githubLink: "https://github.com/PatrickFHam/PasswordGenerator",
    liveLink: "https://patrickfham.github.io/PasswordGenerator/",
    image: {PasswordGeneratorImage}
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
    </div>
  );
}
