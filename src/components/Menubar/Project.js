import React from 'react';
import '../Menubar/css/Project.css';
import menu from './menu.PNG';
import minipro from './mini_prproj.PNG';



const Project = () => {
    return (

        <div>
            <div className="bg-light about_content fadeInUp animated animatedFadeUp">
                <div >
                    <span className="topic" style={{ fontSize: '3rem' }}>My Project </span>
                </div>
                <div className="content_project delay1 fadeInUp animated animatedFadeUp">
                    <img src={menu} alt="Menu" style={{ width: '30rem' }} />
                    <img src={minipro} alt="Minipro" style={{ width: '30rem' }} />
                </div>
            </div>
        </div>

    )
}

export default Project
