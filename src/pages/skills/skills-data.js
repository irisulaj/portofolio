//Frontend
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";

//Backend
import L_PHP  from "../../assets/img/skills/php-1.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";

//Databases
import L_MYSQL from "../../assets/img/skills/mysql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";

//Hosting Platforms
import L_WORDPRESS from "../../assets/img/skills/wordpress-blue.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";

//Programming Languages
import L_C from "../../assets/img/skills/c.svg";
import L_JAVA from "../../assets/img/skills/java-4.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";


export const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
    
      {
        link: "https://getbootstrap.com/",
        imgAltText: "Bootstrap",
        imgSrc: L_BOOTSTRAP,
        skillName: "Bootstrap",
      },
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://react-bootstrap.github.io/",
        imgAltText: "React Bootstrap",
        imgSrc: L_REACT_BOOTSTRAP,
        skillName: "React Bootstrap",
      },
      
    ],

    backend: [
        {
         link: "https://www.php.net/",
         imgAltText: "PHP",
         imgSrc: L_PHP,
         skillName: "PHP",
        },
        {
          link: "https://nodejs.org/en/",
          imgAltText: "Node.js",
          imgSrc: L_NODE_JS,
          skillName: "Node.js",
        },

      ],
      hostingPlatforms: [
        {
          link: "https://wordpress.org/",
          imgAltText: "wordpress",
          imgSrc: L_WORDPRESS,
          skillName: "WordPress",
        },
        {
          link: "https://pages.github.com/",
          imgAltText: "GitHub Pages",
          imgSrc: L_GITHUB_PAGES,
          skillName: "GitHub Pages",
        },
        {
          link: "https://www.heroku.com/",
          imgAltText: "Heroku",
          imgSrc: L_HEROKU,
          skillName: "Heroku",
        },
      ],
      programmingLanguages: [

      {
          link: "https://isocpp.org/",
          imgAltText: "C++",
          imgSrc: L_C,
          skillName: "C++",
      },
      {
          link: "https://www.java.com/en/",
          imgAltText: "Java",
          imgSrc: L_JAVA,
          skillName: "JAVA",
      },
      
      ],
      databases: [
        {
          link: "https://www.mysql.com/",
          imgAltText: "PhpMyAdminMySQL",
          imgSrc: L_MYSQL,
          skillName: "MySQL PhpMyAdmin",
        },
       
        {
          link: "https://www.mongodb.com/",
          imgAltText: "MongoDB",
          imgSrc: L_MONGODB,
          skillName: "MongoDB",
        },
      ],


};