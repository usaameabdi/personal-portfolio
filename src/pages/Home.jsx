import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Banner from './components/Banner'
import Skills from './components/Skills';
import Project from './components/project'
import Contact from './components/Contact';

function Home() {
  return (
 <div id='Home'className='Home'>
  <Header/>
  <Banner/>
  <About/>
  <Skills/>
  <Project/>
  <Contact/>

 </div>
  );
}

export default Home