
// Profile Image
import profile from "./assets/p_img.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import nodejs from "./assets/techstack/nodejs.jpg";

import mysql from "./assets/techstack/mysql.jpg";
import mongoDB from "./assets/techstack/mongoDB.jpg";

import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
// Logos


// Enter your Personal Details here
export const personalDetails = {
  name: "Sandeep",
  tagline: "I build things for web",
  img: profile,
  about: `Final year BTech student at SASTRA University, seeking for an opportunity in the tech field to utilize my
technical skills, adaptability, and passion for innovation. Also enthusiastic about contributing to projects,
gain insights from experienced professionals and develop a successful career.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/sandeep-vallamkonda/",
  github: "https://github.com/Vallamkonda-Sandeep/",
};


// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Science & Engineering",
    Company: `SASTRA Deemed University`,
    Location: "Thanjavur, TamilNadu",
    Duration: "Aug 2021 - Present",
  },
  {
    Position: "Higher secondary",
    Company: `Sri Chaitanya Junior College`,
    Location: "Khammam, Telangana",
    Duration: "June 2019 - May 2021",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  nodejs: nodejs,
  mysql: mysql,
  mongoDB: mongoDB,
  vscode: vscode,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Ecommerce Fashion-Store",
    image: projectImage1,
    description: `Full-stack ecommerce application for browsing products, managing a shopping cart, and placing orders with multiple payment options.Key Features: User authentication, Stripe payment integration, shopping cart management, order tracking, and admin order status management.`,
    techstack: "React.js, Node.js, Express.js , Mongodb",
    previewLink: "https://ecommerce-fashion-store-frontend.onrender.com/",
    githubLink: "https://github.com/Vallamkonda-Sandeep/ecommerce-fashion-store",
  },
  {
    title: "Weather PWA",
    image: projectImage2,
    description: `PWA designed to provide users with weather forecasts, combining the best features of web andmobile applications.Uses service workers to function in offline, APIintegration(OpenWeatherMap) to get real-timeweather updates.`,
    techstack: "React.js",
    previewLink: "https://steady-mermaid-5d6155.netlify.app/",
    githubLink: "https://github.com/Vallamkonda-Sandeep/pwa_weatherApp",
  },
  {
    title: "Student Management System",
    image: projectImage3,
    description: `ASoftware application designed for CRUD Operations : Storing, Retrieving, Updating, and Deleting Student information from the database.
  Key Features: User-friendly interface with advanced search options using the name and register
 number of a student and CRUD operations.`,
    techstack: "Django , HTML/CSS",
    previewLink: "https://sandeep07.pythonanywhere.com/",
    githubLink: "https://github.com/Vallamkonda-Sandeep/Student-Information-Project",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "vallamkondasandeep04@gmail.com",
  phone: "+91 9014028449",
};