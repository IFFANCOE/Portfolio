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
import Experience from '../Timeline/Experience'

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

                <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '100%', margin: 'auto', height: '110%' }}>
                        <img src={myphoto} alt="My pictrue" style={{ width: '100%', borderRadius: '50%', boxShadow: '7px 1rem 5px  red ', margin: '-3.5rem', opacity: '1', backgroundColor: "salmon" }} />
                    </div>
                    <div className="left textfont delay1 fadeInUp animated animatedFadeUp" style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                        <h3 >
                        I am a programmer, who is excited to develop useful things for people. I usually work as a front-end developer. I currently interested in website development.
                        </h3>
                        <div >
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
                                        iffan.pth@gmail.com </Contact>
                                </li >
                                <li className="delay5 fadeInUp animated animatedFadeUp">
                                    <Contact>
                                        <FaUniversity  />
                                        Prince of songkla university phuket campus </Contact>
                                </li>
                                <li className="delay6 fadeInUp animated animatedFadeUp">
                                    <Contact>
                                        <FiHome />
                                        113/2 Chalung-La-ngu, Satun </Contact>
                                </li>
                            </ul>

                            <div style={{ display: 'flex' }}>
                                <a href="https://github.com/IFFANCOE/Resume-react">
                                    <UseAnimations className="delay7 fadeInUp animated animatedFadeUp"
                                        animation={github}
                                        size={50}
                                        autoPlay={true}
                                        // speed={0.3}
                                        loop={true}
                                        strokeColor="black"
                                    /></a>
                                <a href="https://www.facebook.com/profile.php?id=100005899988903">
                                    <UseAnimations className="delay7 fadeInUp animated animatedFadeUp"
                                        animation={facebook}
                                        size={50}
                                        autoPlay={true}
                                        loop={true}
                                        strokeColor="black"
                                    />
                                </a>
                                <a href="https://twitter.com/iffan92209327">
                                    <UseAnimations className="delay6 fadeInUp animated animatedFadeUp"
                                        animation={twitter}
                                        size={50}
                                        autoPlay={true}
                                        loop={true}
                                        strokeColor="black"
                                    />  </a>
                            </div>
                        </div>

                    </div>

                </div>
                <br/>
                <br/>
                <Experience />

            </div>
        </div>
    )
}

export default About
