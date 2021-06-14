import React from 'react'
import Typed from "react-typed";
import '../Menubar/css/Home.css';
import Particles from "react-particles-js"
import '../Menubar/css/About.css';
import '../animated text/animated_fadeup.css'
import myphoto from './Photo.png'


const Home = () => {
    return (

        <div className="lobtop ">
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 40,
                            density: {
                                enable: true,
                                value_area: 1000
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 6,
                                color: "#F2FF2D"
                            }
                        }
                    }
                }} />
            <div className=" fadeInUp animated animatedFadeUp">
                <div className='about_intro'>
                    <img src={myphoto} alt="My pictrue" style={{ width: '41%', borderRadius: '50%',boxShadow:'7px 4.5rem 4rem 5px orange' ,margin:'3rem' ,opacity:'1'}} />
                    <div className="main-info ">
                        <h1>I'm Iffan Pathan</h1>
                        <Typed className="typed-text "
                            strings={["Web Design", "Front-end Developer"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop />
                        <a href="#" className="btn-contact-me">contact me</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;