import React from 'react'
import logofonce from '../img/icons/logofonce.svg'

function ProjectSection() {
    return (
        <section id="project-section" className="project">
            <a className="project__container" href="#header">
                <img className="logo" src={logofonce} alt="logo Youlens" />
            </a>
            <div id="project">
                {/* La galerie de projet ici */}
            </div>
        </section>
    )
}

export default ProjectSection