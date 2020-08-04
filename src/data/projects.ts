import book from '../assets/screenshots/book.png';
import calc from '../assets/screenshots/calculator.png';
import weather from '../assets/screenshots/weather.png';
import facebook from '../assets/screenshots/facebook.png';
import restaurant from '../assets/screenshots/restaurant.png';

interface Project {
  id: number;
  projectName: string;
  projectDescription: string;
  stacksList: string[];
  liveLink: string;
  githubLink: string;
  backgroundUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    projectName: 'Bookstore',
    projectDescription:
      'Bookstore created with React and Redux. The app allows users to add, edit, and delete books, as well as save reading progress. The app is integrated with an external API created with Ruby on Rails.',
    stacksList: ['React', 'Redux', 'HTML', 'CSS'],
    liveLink: 'https://ssf-bookstore.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/react-bookstore',
    backgroundUrl: book,
  },
  {
    id: 2,
    projectName: 'Calculator App',
    projectDescription: 'Calculator with basic operations created with React.',
    stacksList: ['React', 'HTML', 'CSS'],
    liveLink: 'https://ssf-calculator.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/react-calculator',
    backgroundUrl: calc,
  },
  {
    id: 3,
    projectName: 'Weather App',
    projectDescription:
      'A weather forecast app built using the weather API. Created with HTML, CSS and Javascript.',
    stacksList: ['Javascript', 'HTML', 'CSS'],
    liveLink: 'https://ssf-weatherapp.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/javascript-weather-app',
    backgroundUrl: weather,
  },
  {
    id: 4,
    projectName: 'Facebook Clone',
    projectDescription:
      "A Facebook clone created with Ruby on Rails. The app contains the core features found in Facebook's platform, such as the ability to send friend requests, create posts, and upload photos.",
    stacksList: ['Rails', 'HTML', 'CSS'],
    liveLink: 'https://f-b-clone.herokuapp.com/',
    githubLink: 'https://github.com/Torres-ssf/facebook-clone',
    backgroundUrl: facebook,
  },
  {
    id: 5,
    projectName: 'Restaurant Page',
    projectDescription:
      'Dynamically-rendered restaurant page. Create with HTML, CSS and Javascript.',
    stacksList: ['Javascript', 'HTML', 'CSS'],
    liveLink: 'https://ssf-sushiplace.netlify.com/',
    githubLink: 'https://github.com/Torres-ssf/javascript-restaurant-page',
    backgroundUrl: restaurant,
  },
];

export default projects;
