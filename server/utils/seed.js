require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("../models/project");

const projects = [
  {
    title: "Coffee Shop Website",
    description:
      "A fully responsive multi-page coffee shop website built from scratch using semantic HTML and BEM methodology for organized, maintainable CSS.",
    problem:
      "Demonstrates clean, professional front-end markup and responsive layout without relying on frameworks — pure HTML and CSS craftsmanship.",
    technology: ["HTML", "CSS", "BEM", "Figma"],
    imageUrl: "/images/projects/coffeeshop.png",
    githubUrl: "https://github.com/dcisxo/se_project_coffeeshop",
    demoUrl: "",
    featured: true,
    order: 5,
  },
  {
    title: "Spots — Photo Sharing App",
    description:
      "A responsive photo-sharing application where users can add and remove photo cards, like posts, and edit their profile.",
    problem:
      "Showcases DOM manipulation, form validation, and modular JavaScript with a Webpack build pipeline.",
    technology: ["JavaScript", "Webpack", "CSS", "BEM", "OOP"],
    imageUrl: "/images/projects/spots.png",
    githubUrl: "https://github.com/dcisxo/se_project_spots",
    demoUrl: "",
    featured: true,
    order: 4,
  },
  {
    title: "What To Wear — Weather App",
    description:
      "A full-featured React app that fetches real-time weather data and recommends clothing based on the current temperature and conditions.",
    problem:
      "Tackles API integration, React state management, conditional rendering, and component-based architecture.",
    technology: ["React", "Vite", "CSS Modules", "OpenWeather API", "REST"],
    imageUrl: "/images/projects/react-wtwr.png",
    githubUrl: "https://github.com/dcisxo/se_project_react",
    demoUrl: "",
    featured: true,
    order: 3,
  },
  {
    title: "WTWR Express API",
    description:
      "A RESTful backend API for the What To Wear app — handles user authentication, clothing item CRUD, and protected routes using JWT.",
    problem:
      "Demonstrates building a production-quality Node.js/Express API with MongoDB, Mongoose models, input validation, and centralized error handling.",
    technology: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "REST"],
    imageUrl: "/images/projects/express-api.png",
    githubUrl: "https://github.com/dcisxo/se_project_express",
    demoUrl: "",
    featured: true,
    order: 2,
  },
  {
    title: "WTWR — Full Stack App",
    description:
      "The complete full stack version of What To Wear — React frontend connected to an Express/MongoDB backend, deployed with CI/CD on a cloud VM.",
    problem:
      "Brings together the entire MERN skill set: frontend, backend, MongoDB Atlas, JWT auth, Nginx reverse proxy, and cloud deployment.",
    technology: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Nginx",
      "Cloud VM",
    ],
    imageUrl: "/images/projects/final-project.png",
    githubUrl: "https://github.com/dcisxo/se_project_final",
    demoUrl: "",
    featured: true,
    order: 1,
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Project.deleteMany({});
    console.log("Cleared existing projects");

    const inserted = await Project.insertMany(projects);
    console.log(`Seeded ${inserted.length} projects`);

    mongoose.disconnect();
  } catch (err) {
    console.error("Seed error:", err.message);
    process.exit(1);
  }
};

seed();
