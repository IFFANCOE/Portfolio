import React from 'react'
import '../animated text/animated_fadeup.css'

const Skill = () => {
    return (
        <div>
            <div className="  fadeInUp animated animatedFadeUp">
                <h1>
                    Languages <br />
                    HTML
                    Next.js
                    CSS/SCSS
                    JAVA Script
                    Leadership
                    Premiere pro
                    Dart
                    </h1>
            </div>
            <div className="delay1 fadeInUp animated animatedFadeUp">
                <h1>
                    Tools/Libraries <br />
                 React
                 React Native
                 Next
                 Flutter
                 </h1>
            </div>
            <div className="delay2 fadeInUp animated animatedFadeUp">
                <h1>


                    Databases <br />
                Firebase
                MongoDB
                MySQL
                </h1>
            </div>
        </div>
    )
}

export default Skill
