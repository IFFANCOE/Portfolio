import React from 'react';
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import '../Menubar/css/About.css'
import '../animated text/animated_fadeup.css'
import { FiMail, FiHome } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import styled from 'styled-components';
import myphoto from './Photo.png'

const Contact = styled.span`
    display: flex;
    align-items: center;
    transition: all 0.9s ease;
    
    &:hover{
        cursor: pointer;
        color: #ff9900;
        transform: scale(1.04);
    }
`
const About = () => {
    return (
        <div  >
            <div className="bg-light about_content fadeInUp animated animatedFadeUp" >
                <span className="topic" style={{ fontSize: '3rem' }}>About me </span>

                <div className>
                    <img src={myphoto} alt="My pictrue" style={{ width: '30%', borderRadius: '50%', boxShadow: '7px 1rem 5px  red ', margin: '3rem', opacity: '1', backgroundColor: "salmon" }} />
                </div>


                <div className="left textfont delay1 fadeInUp animated animatedFadeUp">
                    <div style={{ display: 'flex' }} >
                        <h3 >
                            I am a person who likes challenges and is always <br />
                            enthusiastic. Is a talkative person Have a good relationship. <br />
                            Happy with work and a person who likes to succeed, my aim <br />
                            is to work in software to develop because I have knowledge <br />
                            and understanding of the software. Another reason is that I need <br />
                            basic knowledge in software to develop my skills <br />
                            continuously to master it. I am confident in my abilities in <br />
                            finding interesting concepts to develop applications.<br />
                        </h3>

                    </div>
                    <ul className="textleft">
                        <li className="delay2 fadeInUp animated animatedFadeUp">
                            <Contact >
                                <BsPerson />
                                Mr.IFFAN PATHAN </Contact>
                        </li>
                        <li className="delay3 fadeInUp animated animatedFadeUp">
                            <Contact>
                                <AiOutlinePhone />
                                096-424-9677 </Contact>
                        </li>
                        <li className="delay4 fadeInUp animated animatedFadeUp">
                            <Contact>
                                <FiMail />
                                iffan.p@hotmail.com </Contact>
                        </li >
                        <li className="delay5 fadeInUp animated animatedFadeUp">
                            <Contact>
                                <FaUniversity style={{ color: '' }} />
                                Prince of songkla university phuket campus </Contact>
                        </li>
                        <li className="delay6 fadeInUp animated animatedFadeUp">
                            <Contact>
                                <FiHome />
                                113/2 Chalung-La-ngu, Satun </Contact>
                        </li>
                    </ul>

                    <div style={{ display: 'flex' }}>

                        <UseAnimations className="delay7 fadeInUp animated animatedFadeUp"
                            animation={github}
                            size={50}
                            autoPlay={true}
                            // speed={0.3}
                            loop={true}
                            strokeColor="black"
                        />
                        <UseAnimations className="delay7 fadeInUp animated animatedFadeUp"
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
