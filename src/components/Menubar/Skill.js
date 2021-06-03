import { color } from '@chakra-ui/styled-system';
import React from 'react';
import '../animated text/animated_fadeup.css';
import './Skill.css';

const Skill = () => {
    return (
        <div className="about_content">
            <div className="fadeInUp animated animatedFadeUp" style={{ textTransform: 'uppercase' }}>
                <h1 style={{ fontSize: '3rem' }} className="topic" >My Skills</h1>

            </div>
            <div >
                <h3 className="topic delay1 fadeInUp animated animatedFadeUp" > Languages  </h3>
                <span className="delay6 fadeInUp animated animatedFadeUp">
                    #HTML
                    #Next.js
                    #CSS/SCSS
                    #JAVA Script
                    #Leadership
                    #Premiere pro
                    #Dart
                    </span>

                <div >
                    <h3 className="topic delay1 fadeInUp animated animatedFadeUp"  >Tools/Libraries </h3>
                    
                    <span className="delay6 fadeInUp animated animatedFadeUp"> #React 
                      #React Native 
                      #Next 
                     #Flutter </span>
                
                </div>
                <div >
                    <h3 className="topic delay1 fadeInUp animated animatedFadeUp"  >Databases </h3>
                    <span className="delay6 fadeInUp animated animatedFadeUp">
                        #Firebase
                        #MongoDB
                        #MySQL
                </span>
                </div>
            </div>
        </div>
    )
}

export default Skill
