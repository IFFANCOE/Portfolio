// import { color } from '@chakra-ui/styled-system';
import React from 'react';
import '../animated text/animated_fadeup.css';
import '../Menubar/css/Skill.css';



const Skill = () => {
    return (
        <div className=" bg-light about_skill">
            <div className="fadeInUp animated animatedFadeUp" style={{ textTransform: 'uppercase' }}>
                <span style={{ fontSize: '3rem' }} className="topic" >My Skills</span>
            </div>
            <div >
                <h3 className="topic delay1 fadeInUp animated animatedFadeUp" > Languages  </h3>
                <span className="delay6 fadeInUp animated animatedFadeUp">
                    #HTML
                    #Next.js
                    #CSS/SCSS
                    #JAVA Script
                    #Dart
                    #Python
                    #C / C# / C++
                    </span>

                <div >
                    <h3 className="topic delay1 fadeInUp animated animatedFadeUp"  >Tools/Libraries </h3>

                    <span className="delay6 fadeInUp animated animatedFadeUp">
                        #React
                        #React Native
                        #Next
                        #Flutter
                        #Express
                        #REST API
                        </span>

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
