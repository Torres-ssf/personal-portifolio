import calc from '../assets/screenshots/calculator.png';
import pomodoro from '../assets/screenshots/pomodoro.png';
import alunajs from '../assets/screenshots/alunajs.png';
import movieapp from '../assets/screenshots/movieapp.png';
import gobarberweb from '../assets/screenshots/gobarberweb.png';
import gobarberapi from '../assets/screenshots/gobarberapi.png';
import fetchInParallel from '../assets/screenshots/fetchInParallel.png';
import weather from '../assets/screenshots/weather.png';

interface Project {
  projectName: string;
  projectDescription: string;
  liveLink?: string;
  githubLink: string;
  backgroundUrl: string;
}

export const contactInfo = {
  github: 'https://github.com/Torres-ssf',
  linkedin: 'https://www.linkedin.com/in/torres-ssf/',
  angelList: 'https://angel.co/u/torres-ssf',
  email: 'sergio.uft@gmail.com',
};

const projects: Project[] = [
  {
    projectName: 'Fetch In Parallel',
    projectDescription:
      'This is a code lab to test the most optimal solution to fetch a given number of urls limited by a given number of how many urls should be fetched concurrently.',
    githubLink: 'https://github.com/Torres-ssf/fetch-in-parallel',
    backgroundUrl: fetchInParallel,
  },
  {
    projectName: 'React Pomodoro',
    projectDescription:
      'This is a simple project made using many of React Hooks (useState, useCallback, useContext, useReducer). React Router Dom is used to control the navigation between pages and each pomodoro cycle is saved on the local storage.',
    githubLink: 'https://github.com/Torres-ssf/react-pomodoro',
    liveLink: 'https://www.pomodoro.torres-ssf.com/',
    backgroundUrl: pomodoro,
  },
  {
    projectName: 'Alunajs',
    projectDescription:
      'Lib to standardising Crypto Trading APIs across multiple exchanges.',
    githubLink: 'https://github.com/alunacrypto/alunajs',
    backgroundUrl: alunajs,
  },
  {
    projectName: 'Gobarber Web',
    projectDescription:
      'The web version of GoBarber. The application was built with React, Typescript and Styled-Components.',
    githubLink: 'https://github.com/Torres-ssf/gobarber-web',
    backgroundUrl: gobarberweb,
  },
  {
    projectName: 'Gobarber API',
    projectDescription:
      'Sever-side application for GoBarber. The application was built with NodeJs, Typescript, Express, TypeORM, Postgres,Redis, AWS SES, AWS S3.',
    githubLink: 'https://github.com/Torres-ssf/fetch-in-parallel',
    backgroundUrl: gobarberapi,
  },
  {
    projectName: 'React Movie App',
    projectDescription:
      'A webpage that consumes The Movie Database API to display information about movies. The implementation of this project is divided into the following Milestones. This application was implemented with React + Styled Components. It will also use Redux in a future milestone.',
    liveLink: 'https://movieapp.torres-ssf.com/',
    githubLink: 'https://github.com/Torres-ssf/movie-app',
    backgroundUrl: movieapp,
  },
  {
    projectName: 'React Calculator App',
    projectDescription: 'Calculator with basic operations created with React.',
    liveLink: 'https://ssf-calculator.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/react-calculator',
    backgroundUrl: calc,
  },
  {
    projectName: 'Vanilla JS Weather App',
    projectDescription:
      'A weather forecast app built using the weather API. Created with HTML, CSS and Javascript.',
    liveLink: 'https://ssf-weatherapp.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/javascript-weather-app',
    backgroundUrl: weather,
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
  'Docker',
  'MongoDB',
  'SASS',
  'AWS SES',
  'AWS S3',
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
