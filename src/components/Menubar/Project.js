import React from 'react';
import '../Menubar/css/Project.css';
import game from './menu.PNG';
import minipro from './mini_prproj.PNG';
import deploymen from './deploymen.PNG';
import { Link } from 'react-router-dom';


const Project = () => {
    return (

        <div>
            <div className="bg-light about_content fadeInUp animated animatedFadeUp">
                <div >
                    <span className="topic" style={{ fontSize: '3rem' }}>My Project </span>
                </div>
                <div className=" project delay1 fadeInUp animated animatedFadeUp">
                    <div className="container">
                        <div className="item">
                            <img src={game} alt="Menu" style={{ width: '30rem' }} />
                            <p className="text_position"> Survival Game: Enjoying a Budget
                            Vacation in Phuket
                             </p>
                        </div>
                        <span style={{ fontSize: '1.1rem', opacity: '0.7' }}>เซอร์ไววอล: ภูเก็ตไม่แพงอย่างที่คิด <br />เป็นโครงการพัฒนาสื่อการเรียนรู้ผ่านการเล่นเกม <br />
                            โดยในโครงการนี้เราได้เสนอให้เห็นการท่องเที่ยวในราคาที่ไม่แพง<br /> ที่คนส่วนใหญ่ไม่รู้
                            มาเป็นตัวอย่างในการทำสื่อการเรียนรู้ </span>
                    </div>
                    <div className="container">
                        <a href="https://iffanpathan.medium.com/q-r-covid-19-reactjs-612b9e3ac90c">
                            <div className="item">
                                <img src={minipro} alt="Minipro" style={{ width: '30rem' }} />
                                <p className="text_position"> Q and R COVID-19(ReactJS) </p>
                            </div>
                        </a>
                        <span style={{ fontSize: '1.1rem', opacity: '0.7' }}>มินิโปรเจคนี้สร้างขึ้นมาเพื่อช่วยผู้คน <br />
                        ในการวัดความเสี่ยงของโรคโควิด-19 <br />ในสถานการณ์ ณ ตอนนี้ที่เกิดขึ้นคือโรคระบาดโคโรน่าไวรัส
                          </span>
                    </div>
                    <div className="container">
                        <a href="https://iffanpathan.medium.com/web-deploymen-936a22c742eb">
                            <div className="item">
                                <img src={deploymen} alt="Deploymen" style={{ width: '30rem' }} />
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
