import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.scss'
import Hero from './Components/Hero/Hero'
import Parallax from './Components/Parallax/Parallax'
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skills.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Portfolio from './Components/Projects/Portfolio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <section id='home'>
    <Navbar/>
    <Hero/>

  </section>
  <section ><Parallax type = {"education"}/></section>
  <section id='education' className='h-auto vertical'><Education/></section>
  <section id='skills' className='h-auto lg:h-screen vertical'><Skills/></section>
  <section id='projects'><Parallax type = {"projects"}/></section>
  {/* <Projects/> */}
  <Portfolio/>
  <section ><Contact/></section>
    
    </>
  )
}

export default App
