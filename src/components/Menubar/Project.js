import React from 'react';
import '../Menubar/css/Project.css';
// import game from './menu.PNG';
import minipro from './mini_prproj.PNG';
import deploymen from './deploymen.PNG';
// import { Link } from 'react-router-dom';



const Project = () => {
    return (

        <div >
            <div className="bg-light about_project fadeInUp animated animatedFadeUp">
                <div >
                    <span className="topic" style={{ fontSize: '3rem' }}>My Project </span>
                </div>
                <div className=" project delay1 fadeInUp animated animatedFadeUp ">

                    <div className="containerA">
                        <a href="https://iffanpathan.medium.com/q-r-covid-19-reactjs-612b9e3ac90c">
                            <div className="image-text">
                                <img src={minipro} alt="Minipro" />
                                <p className="text_position">Q and R COVID-19 </p>
                            </div>
                        </a>
                        <div>
                            <span style={{ fontSize: '1.1rem', opacity: '0.7' }}>มินิโปรเจคนี้สร้างขึ้นมาเพื่อช่วยผู้คน <br />
                                ในการวัดความเสี่ยงของโรคโควิด-19 <br />ในสถานการณ์ ณ ตอนนี้ที่เกิดขึ้นคือโรคระบาดโคโรน่าไวรัส
                            </span>
                        </div>

                    </div>
                    <div className="containerA">
                        <a href="https://iffanpathan.medium.com/web-deploymen-936a22c742eb">
                            <div className="image-text">
                                <img src={deploymen} alt="Deploymen" />
                                <p className="text_position"> pm2 and Nginx as reverse proxy </p>
                            </div>
                        </a>
                        <span style={{ fontSize: '1.1rem', opacity: '0.7', textTransform: 'none' }}>Public web จำเป็นต้องใช้ผ่าน 2 port หลักๆ คือ 80 http, 443 https <br />
                            ซึ่งโดยปกติแล้วเราจะมักเขียนโปรแกรมภาษา node.js <br />มักจะไม่ได้ให้ผู้ใช้เข้าผ่าน port 80 หรือ 443 ตรงๆ<br />
                            มักต้องผ่าน http web server สักตัวหนึ่งซึ่งในที่นี่ขอแนะนำ nginx
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project
