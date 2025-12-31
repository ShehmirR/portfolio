import React from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Experience from './pages/Experience.js'
import Projects from './pages/Projects.js'
import Skills from './pages/Skills.js'

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </div>
  )
}

export default App
