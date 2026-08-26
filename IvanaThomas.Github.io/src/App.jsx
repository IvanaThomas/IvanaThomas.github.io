
import './App.css'
import Navbar from './Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About.jsx'
import Projects from './Projects.jsx'
import ivanaPhoto from './assets/ivana.JPG'
import BGPReplay from './proj/BGPReplay.jsx'
import VanAllenProbes from './proj/VanAllenProbes.jsx'
import IBEX from "./proj/IBEX.jsx";
import Kartina from "./proj/Kartina.jsx";

function Home() {
  return (
    <>
        <main>
          <section className= "home">
            <div className = "intro">
              <h1>Hi, I'm Ivana Thomas!</h1>

              <p>I'm a Computer Science graduate from Cal Poly, 2026 Graduate. I am naturally curious and always looking for something new to learn by building things, 
                whether that's developing software, working with data, or exploring complex systems. I enjoy computer science for the opportunity to explore a wide range of topics, but I find myself especially drawn to space science and computer networking. 
              </p>

              <p>When I am not coding, I enjoy ballet, rock climbing, running, and hanging out with my cat.</p>
            </div>
            <div className = "photo">
              <img src={ivanaPhoto} alt="Ivana Thomas" />         
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
        <Route path = "/projects/bgpreplay" element = {<BGPReplay />} />
        <Route path = "/projects/van-allen-probes" element = {<VanAllenProbes />} />
        <Route path = "/projects/ibex" element = {<IBEX />} />
        <Route path = "/projects/kartina" element = {<Kartina />} />
      </Routes>

      </BrowserRouter>
 
  )
}

export default App
