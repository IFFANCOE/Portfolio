import React from 'react';
import '../Menubar/css/Project.css';
// import game from './menu.PNG';
// import minipro from './mini_prproj.PNG';
// import deploymen from './deploymen.PNG';
// import { Link } from 'react-router-dom';
import projects from '../ProjectList/projectList'
const Project = () => {
    return (

        <div >
            <div className="bg-light about_project fadeInUp animated animatedFadeUp">
                <div >
                    <span className="topic" style={{ fontSize: '3rem' }}>My Project </span>
                </div>
                <div className=" project delay1 fadeInUp animated animatedFadeUp ">

                    <div className="containerA" >
                        {projects.map((project) => {
                            return (
                                <div index={project.id} >
                                    <a href={project.url}>
                                        <div className="image-text">
                                            <img src={project.thumbnail} alt="Minipro" />
                                            <p className="text_position">{project.name}</p>
                                        </div>
                                    </a>
                                    <div>
                                        <span style={{ fontSize: '1.1rem', opacity: '0.7' }}>
                                            {project.title}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Project
