import ProjectCard from "./ProjectCard.jsx";
import AGU25 from "./assets/AGU25.jpeg";
import './Projects.css'

function Projects() {
    /*set up props for all of your projects*/
    const projects = [
        {
            title: "Van Allen Probes",
            description: "Research conducted with the Space Sciences Laboratory at UC Berkeley using data from NASA's Van Allen Probes Mission",
            technologies: ["Python"],
            image: AGU25,
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