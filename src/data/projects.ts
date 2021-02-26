import book from '../assets/screenshots/book.png';
import calc from '../assets/screenshots/calculator.png';
import weather from '../assets/screenshots/weather.png';
import restaurant from '../assets/screenshots/restaurant.png';
import movieapp from '../assets/screenshots/movieapp.png';
import gobarberweb from '../assets/screenshots/gobarberweb.png';
import gobarberapi from '../assets/screenshots/gobarberapi.png';
import shortster from '../assets/screenshots/shortster.png';

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
  twitter: 'https://twitter.com/torres_ssf',
  email: 'sergio.uft@gmail.com',
};

const projects: Project[] = [
  {
    projectName: 'Shortster API',
    projectDescription:
      'This project is a RESTful API with the functionality to create URL Shortsters, a short code to replace URL long links. The application was implemented with NodeJS, Typescript, Express, and Postgres. I followed TDD and used Package by Feature to organized the project. ',
    githubLink: 'https://github.com/Torres-ssf/shortster-api',
    backgroundUrl: shortster,
  },
  {
    projectName: 'Gobarber Web',
    projectDescription:
      'The web version of GoBarber. The application was built with React, Typescript and Styled-Components.',
    liveLink: 'https://gobarber.torres-ssf.com/',
    githubLink: 'https://github.com/Torres-ssf/gobarber-web',
    backgroundUrl: gobarberweb,
  },
  {
    projectName: 'Gobarber API',
    projectDescription:
      'Sever-side application for GoBarber. The application was built with NodeJs, Typescript, Express, TypeORM, Postgres,Redis, AWS SES, AWS S3.',
    liveLink: 'https://gobarber-api-torres.herokuapp.com/documentation/',
    githubLink: 'https://github.com/Torres-ssf/gobarber-backend',
    backgroundUrl: gobarberapi,
  },
  {
    projectName: 'Movie App',
    projectDescription:
      'A webpage that consumes The Movie Database API to display information about movies. The implementation of this project is divided into the following Milestones. This application was implemented with React + Styled Components. It will also use Redux in a future milestone.',
    liveLink: 'https://movieapp.torres-ssf.com/',
    githubLink: 'https://github.com/Torres-ssf/movie-app',
    backgroundUrl: movieapp,
  },
  {
    projectName: 'Bookstore',
    projectDescription:
      'Bookstore created with React and Redux. The app allows users to add, edit, and delete books, as well as save reading progress. The app is integrated with an external API created with Ruby on Rails.',
    liveLink: 'https://ssf-bookstore.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/react-bookstore',
    backgroundUrl: book,
  },
  {
    projectName: 'Calculator App',
    projectDescription: 'Calculator with basic operations created with React.',
    liveLink: 'https://ssf-calculator.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/react-calculator',
    backgroundUrl: calc,
  },
  {
    projectName: 'Weather App',
    projectDescription:
      'A weather forecast app built using the weather API. Created with HTML, CSS and Javascript.',
    liveLink: 'https://ssf-weatherapp.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/javascript-weather-app',
    backgroundUrl: weather,
  },
  {
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
