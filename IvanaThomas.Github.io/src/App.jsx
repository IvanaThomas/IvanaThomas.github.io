
import './App.css'
import Navbar from './Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About.jsx'
import Projects from './Projects.jsx'


function Home() {
  return (
    <>
        <main>
          <section className= "home">
            <div className = "intro">
              <h1>Hi, I'm Ivana Thomas!</h1>

              <p>I'm a Computer Science graduate from Cal Poly, Class of 2026. I am naturally curious and always looking for something new to learn.
                I enjoy computer science for the opportunity to explore a wide range of topics, but I find myself especially drawn to space science and computer networking. </p>

              <p></p>
            </div>
            <div className = "photo">
              <img src = "/src/assets/ivana.jpg" alt = "Ivana Thomas" />
            </div>
          </section>

          <section className = "contact">
            <h2> Let's Connect!</h2>
            <p> I'm always happy to connect with people interested in software engineering and related fields.</p>
            <div className= "contact-links">
              <a href = "mailto:ivana_th@icloud.com">Email</a>
              <a href = "https://www.linkedin.com/in/ivana-thomas-a67215314">LinkedIn</a>
              <a href = "https://github.com/IvanaThomas">GitHub</a>
            </div>
          </section>
        </main>
        
        <footer>
          <p>© 2026 Ivana Thomas</p>
        </footer>
      </>

  );

};

function App() {
  return (
  
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/projects" element = {<Projects />} />
      </Routes>

      </BrowserRouter>
 
  )
}

export default App
