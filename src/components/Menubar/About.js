import React from 'react'
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github"
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";

import './About.css'
import '../animated text/animated_fadeup.css'
import { FiMail,FiHome } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';


const About = () => {
    return (
        <div className="bg bg-light ">
            <div className="about__content fadeInUp animated animatedFadeUp">
                <div className="textfont">
                    <h1 >
                        I am a person who likes challenges and is always <br />
                        enthusiastic. Is a talkative person Have a good relationship. <br />
                        Happy with work and a person who likes to succeed, my aim <br />
                        is to work in software to develop because I have knowledge <br />
                        and understanding of the software. Another reason is that I need <br />
                        basic knowledge in software to develop my skills <br />
                        continuously to master it. I am confident in my abilities in <br />
                        finding interesting concepts to develop applications.<br />
                    </h1>
                        <ul className="textleft">
                            <li className="delay1 fadeInUp animated animatedFadeUp">
                            <BsPerson/>
                                <span > Mr.IFFAN PATHAN </span>
                            </li>
                            <li className="delay2 fadeInUp animated animatedFadeUp">
                                <AiOutlinePhone />
                                <span> 096-424-9677 </span>
                            </li>
                            <li className="delay3 fadeInUp animated animatedFadeUp">
                                <FiMail />
                                <span> iffan.p@hotmail.com </span>
                            </li >
                            <li className="delay4 fadeInUp animated animatedFadeUp">
                            <FaUniversity style={{color:''}} />
                                <span> Prince of songkla university phuket campus </span>
                            </li>
                            <li className="delay5 fadeInUp animated animatedFadeUp">
                            <FiHome/>
                                <span> 113/2 Chalung-La-ngu, Satun </span>
                            </li>
                        </ul>
                    
                    <div style={{ display: 'flex' }}>

                        <UseAnimations className="delay6 fadeInUp animated animatedFadeUp"
                            animation={github}
                            size={50}
                            autoPlay={true}
                            // speed={0.3}
                            loop={true}
                            strokeColor="black"
                        />
                        <UseAnimations className="delay6 fadeInUp animated animatedFadeUp"
                            animation={facebook}
                            size={50}
                            autoPlay={true}
                            loop={true}
                            strokeColor="black"
                        />
                        <UseAnimations className="delay6 fadeInUp animated animatedFadeUp"
                            animation={twitter}
                            size={50}
                            autoPlay={true}
                            loop={true}
                            strokeColor="black"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
