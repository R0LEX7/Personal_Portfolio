const projectsItems = [
  {
    id: 1,
    title: "Bubble Game",
    stack: ["Javascript"],
    img: "/projects/bubble.png",
    desc: "A bubble Game with clean ui with plain javascript. Users have to hit the target balloon in a specific time to get high score.",
    link: "https://bubble-game-rolex.netlify.app",
  },
  {
    id: 2,
    title: "Newsmonkey",
    img: "/projects/news.png",
    stack: ["React"],
    desc: "NewsMonkey is a React-powered news application designed for real-time news consumption. By seamlessly integrating with the NewsAPI, it provides users with up-to-date news articles from diverse sources.",
    link: "https://github.com/R0LEX7/NewsMonkey",
  },
  {
    id: 3,
    title: "Zestybites",
    img: "/projects/zestybites.png",
    stack: ["React", "Firebase"],

    desc: "Innovatively crafted 'Zesty Bites,' a secure food delivery app using React, Firebase, Parcel, and Material UI. Enabled user-friendly restaurant exploration, dish customization, and Google Pay transactions.",
    link: "https://zestybites.vercel.app/",
  },
  {
    id: 4,
    title: "Medium Blog",
    img: "/projects/blog.png",
    stack: ["React", "Appwrite"],
    desc: "This is a comprehensive project designed to cater to the unique needs and interests of software engineers and developers. This web-based platform is envisioned as a hub for sharing knowledge, experiences, and insights within the software engineering community.",
    link: "https://medium-dev.vercel.app/",
  },
];

const navItems = [
  { name: "Home", path: "home" },
  { name: "Skills", path: "skills" },
  { name: "Qualification", path: "qualification" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];


export { projectsItems , navItems };
