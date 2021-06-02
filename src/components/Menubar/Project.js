import React from 'react';
import './Project.css';
import menu from './menu.PNG';
import minipro from './mini_prproj.PNG';



const Project = () => {
    return (
        
        
        <div className="bg">
            <div className="g">
                 <span>My Project </span> 
            </div>
           <div>
            <img  src={menu}  alt="Menu" style={{width:'30rem'}} />
            <img  src={minipro}  alt="Minipro" style={{width:'30rem'}} />
           </div>
        </div>
    )
}

export default Project
