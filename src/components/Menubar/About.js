import React from 'react'
import UseAnimations from "react-useanimations";
import instagram from "react-useanimations/lib/instagram"
import facebook from "react-useanimations/lib/facebook";
import './About.css'

const About = () => {
    return (
        <div className="bg ">
            <div className="fadeInUp animated animatedFadeUp">
                <div className="textfont">
                    <h1 >
                        Need basic knowledge in software to <br />
                        develop my skills continuously to master it. <br />
                        I am confident in my abilities in finding <br />
                        interesting concepts to develop <br />
                        application.
                    </h1>
                    <div>
                        <ul >
                            <li>
                                ? Mr.IFFAN PATHAN
                            </li>
                            <li>
                                ? 096-424-9677
                            </li>
                            <li>
                            ? iffan.p@hotmail.com
                            </li>
                            <li>
                            ? 113/2 Chalung-La-ngu, Satun
                            </li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <UseAnimations
                            animation={instagram}
                            size={80}
                            autoPlay={true}
                            speed={0.3}
                            loop={true}
                            strokeColor="#FF00E0"
                        />
                        <UseAnimations
                            animation={facebook}
                            size={80}
                            autoPlay={true}
                            loop={true}
                            strokeColor="Blue"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
