import ProjectCard from "./ProjectCard.jsx";
import AGU25 from "./assets/AGU25.jpeg";
import AGU24 from "./assets/AGU24.jpeg";
import BGP_UI from "./assets/BGP_UI.jpg";

import './Projects.css'

function Projects() {
    /*set up props for all of your projects*/
    const projects = [
        {
            title: "Van Allen Probes",
            description: "Research conducted with the Space Sciences Laboratory at UC Berkeley using data from NASA's Van Allen Probes Mission",
            technologies: ["Python", "Technical Writing"],
            image: AGU25,
            link: "/projects/van-allen-probes",
        },
        {
            title: "IBEX",
            description: "Research conducted with the Space Sciences Laboratory at UC Berkeley as an REU student using data from NASA's Interstellar Boundary Explorer (IBEX) Mission:",
            technologies: ["Python", "matplotlib", "numpy", "pandas"],
            image: AGU24,
            link: "/projects/ibex",
        },
        {
            title: "BGPReplay: BGPKit -> BGPalerter Custom Connector and User Interface",
            description: "A custom JavaScript connector and react-based user interface between BGPKit and BGPalerter, allowing for timed historical replay of BGP events",
            technologies: ["Rust", "React", "System Architecture Design", "REST API Design"],
            image: BGP_UI,
            link: "/projects/bgpreplay",
        },
        {
            title: "Kartina: Custom Photobooth Application for Android",
            description: "A custom photobooth application with manual and timed photo capture, frame selection, and export capabilities.",
            technologies: ["Kotlin", "Android Studio", "AGILE Development", "UI/UX Design"],
            image: "#",
            link: "#",
        }
    ]
    return (
        <div className="projects-page">
            <h1>Projects</h1>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        reverse={index % 2 !== 0} />
                ))}
            </div>
        </div>
        
    );
};

export default Projects;