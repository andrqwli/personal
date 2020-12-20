import React from 'react'
import github from '../media/github.png';
import Button from 'react-bootstrap/Button';

function ProjectCard({img, title, desc, link, repo}) {
    return (
        <div className="project-card">
            <div className="card-image">
                <img src={img}/>
            </div>
            <div className="card-content">
                <h4>{title}</h4>
                <p>{desc}</p>
                <div className="button-panel">
                    <a href={link}>
                        <Button variant="outline-primary">View</Button>
                    </a>
                    <a href={repo}>
                        <img src={github} className="git"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
