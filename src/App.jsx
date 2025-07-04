import "./App.scss";
import ResumeComp from "./Components/Resume/ResumeComp.jsx";

import {
  Navbar,
  Hero,
  Parallax,
  Education,
  Skills,
  Contact,
  Portfolio,
  Cursor,
} from "./index.js";
import { Worker } from '@react-pdf-viewer/core';


function App() {
  return (
    <>

      <Cursor />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section>
        <Parallax type={"qualification"} />
      </section>
      <section id="qualification" className="h-auto vertical">
        <Education />
      </section>
      <section id="skills" className="h-auto lg:h-screen vertical">
        <Skills />

      </section>
      <section id="projects">
        <Parallax type={"projects"} />
      </section>


      <Portfolio />
      {/* <section id="resume"><ResumeComp/></section> */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
