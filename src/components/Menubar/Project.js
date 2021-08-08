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
                <div className=" style_project delay1 fadeInUp animated animatedFadeUp ">
                    <div className="containerA" >
                        {projects.map((project) => {
                            return (
                                <div index={project.id} className="item">
                                    <a href={project.url}>
                                        <div className="image-text">
                                            <img src={project.thumbnail} alt="Minipro" />
                                            <p className="text_position">{project.name}</p>
                                        </div>
                                    </a>
                                    <div>
                                        <span style={{ fontSize: '1.1rem', opacity: '0.7'}}>
                                            {project.title}
                                        </span>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >{project.teg1} </span>
                                        <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >{project.teg2} </span>
                                        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >{project.teg3} </span>
                                        <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >{project.teg4} </span>
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
