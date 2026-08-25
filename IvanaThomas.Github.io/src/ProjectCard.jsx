function ProjectCard({ title, description, technologies, image, link, reverse}) {
    return (
        <div className={`project-card ${reverse ? "reverse" : ""}`}>

            <img src = {image}
                alt = {title}
                className = "project-thumbnail"/>

            <div className ="project-card-content">
                <h2>{title}</h2>

                <p>{description}</p>

                <p className="technologies">{technologies.join(" · ")}</p>
                <a href ={link}> Learn More </a>
            </div>
        </div>
    );
};

export default ProjectCard;