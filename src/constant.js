const projectsItems = [
  {
    id: 1,
    title: "Bubble Game",
    stack: ["Javascript"],
    img: "/projects/bubble.png",
    video: "https://youtu.be/CaSyLqHY5Ag4",
    desc: "A bubble Game with clean ui with plain javascript. Users have to hit the target balloon in a specific time to get high score.",
    link: "https://bubble-game-rolex.netlify.app",
  },
  {
    id: 2,
    title: "Newsmonkey",
    img: "/projects/news.png",
    stack: ["React"],
    video :"https://youtu.be/fRRbmFpAiQg",
    desc: "NewsMonkey is a React-powered news application designed for real-time news consumption.It provides users with up-to-date news articles from diverse sources.",
    link: "https://github.com/R0LEX7/NewsMonkey",
  },
  {
    id: 3,
    title: "Zestybites",
    img: "/projects/zestybites.png",
    stack: ["React", "Firebase"],
    video : "https://youtu.be/muJEhcH_dUY ",
    desc: "Innovatively crafted 'Zesty Bites,' a secure food delivery app using React, Firebase, Parcel,Material UI and Google Pay transactions.",
    link: "https://zestybites.vercel.app/",
  },
  {
    id: 4,
    title: "Medium Blog",
    img: "/projects/blog.png",
    stack: ["React", "Appwrite"],
    video: "https://youtu.be/1cYqHtFfZ_8",
    desc: "This web-based platform is envisioned as a hub for sharing knowledge, experiences, and insights within the software engineering community.",
    link: "https://medium-dev.vercel.app/",
  },
  {
    id: 5,
    title: "Pinfinty",
    img: "/projects/blog.png",
    video : "https://youtu.be/_jNyTU7Vilw",
    stack: ["ReactJs", "NextUI", "Nodejs" , "MongoDB" , "ExpressJs" ],
    desc: "PINFINITY is a feature-rich social media platform built with the MERN stack, offering secure authentication via JWT and Bcrypt.js**. Users can create posts with image uploads using **Multer** and Cloudinary, and engage in real-time with like and comment features. It also supports seamless user logout for a smooth experience.",
    link: "https://pinfinity.vercel.app/",
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
