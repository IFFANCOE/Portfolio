import React from 'react'
import Typed from "react-typed";
import './Home.css';
import Particles from "react-particles-js"
import './About.css';

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
            <div className="fadeInUp animated animatedFadeUp">
                <div className="main-info">
                    <h1>I'm Iffan Pathan</h1>
                    <Typed className="typed-text"
                        strings={["Web Design", "Front-end Developer"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop />
                    <a href="#" className="btn-contact-me">contact me</a>
                    <div className="Social-media">


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;