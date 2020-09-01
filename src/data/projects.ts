import { v4 } from 'uuid';

import book from '../assets/screenshots/book.png';
import calc from '../assets/screenshots/calculator.png';
import weather from '../assets/screenshots/weather.png';
import restaurant from '../assets/screenshots/restaurant.png';
import gobarberweb from '../assets/screenshots/gobarberweb.png';
import gobarberapi from '../assets/screenshots/gobarberapi.png';

interface Project {
  id: string;
  projectName: string;
  projectDescription: string;
  liveLink: string;
  githubLink: string;
  backgroundUrl: string;
}

export const contactInfo = {
  github: 'https://github.com/Torres-ssf',
  linkedin: 'https://www.linkedin.com/in/torres-ssf/',
  angelList: 'https://angel.co/u/torres-ssf',
  twitter: 'https://twitter.com/torres_ssf',
  email: 'sergio.uft@gmail.com',
};

const projects: Project[] = [
  {
    id: v4(),
    projectName: 'Gobarber Web',
    projectDescription:
      'The web version of GoBarber, an application for service providers, such as barbers, to control customers schedules. The application was build with React, Typescript and Styled-Components.',
    liveLink: 'https://gobarber.torres-ssf.com/',
    githubLink: 'https://github.com/Torres-ssf/gobarber-web',
    backgroundUrl: gobarberweb,
  },
  {
    id: v4(),
    projectName: 'Gobarber API',
    projectDescription:
      'Sever-side application for GoBarber, an application for service providers, such as barbers, to control customer schedules. The application was build with Node, Typescript, Express, TypeORM, Postgres, MongoDB,Redis, AWS SES, AWS S3.',
    liveLink: 'https://api.gobarber.torres-ssf.com/documentation',
    githubLink: 'https://github.com/Torres-ssf/gobarber-backend',
    backgroundUrl: gobarberapi,
  },
  {
    id: v4(),
    projectName: 'Bookstore',
    projectDescription:
      'Bookstore created with React and Redux. The app allows users to add, edit, and delete books, as well as save reading progress. The app is integrated with an external API created with Ruby on Rails.',
    liveLink: 'https://ssf-bookstore.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/react-bookstore',
    backgroundUrl: book,
  },
  {
    id: v4(),
    projectName: 'Calculator App',
    projectDescription: 'Calculator with basic operations created with React.',
    liveLink: 'https://ssf-calculator.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/react-calculator',
    backgroundUrl: calc,
  },
  {
    id: v4(),
    projectName: 'Weather App',
    projectDescription:
      'A weather forecast app built using the weather API. Created with HTML, CSS and Javascript.',
    liveLink: 'https://ssf-weatherapp.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/javascript-weather-app',
    backgroundUrl: weather,
  },
  {
    id: v4(),
    projectName: 'Restaurant Page',
    projectDescription:
      'Dynamically-rendered restaurant page. Create with HTML, CSS and Javascript.',
    liveLink: 'https://ssf-sushiplace.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/javascript-restaurant-page',
    backgroundUrl: restaurant,
  },
];

export const developmentSkills = [
  'React',
  'React Native',
  'Typescript',
  'Node',
  'Styled Components',
  'Redux',
  'Jest',
  'Postgres',
  'TypeORM',
  'MongoDB',
  'SASS',
  'Docker',
];

export const softSkills = [
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Time Management',
  'Mentoring',
  'Interpersonal Skills',
  'Attention to Detail',
  'Pair Programming',
  'Collaborative Problem Solving',
];

export const toolsSkills = [
  'Git',
  'Github',
  'TDD',
  'OOP',
  'SOLID',
  'REST API',
  'Mobile Design',
  'Design Patterns',
  'Responsive Web Design',
  'Netlify',
  'Heroku',
  'Single Page Applications',
  'User Experience',
];

export default projects;
