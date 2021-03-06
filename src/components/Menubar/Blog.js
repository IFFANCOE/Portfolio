import React from 'react';
import './css/Blog.css';
import { SiMedium } from 'react-icons/si';
import '../animated text/animated_fadeup.css'

const Blog = () => {
    return (
        <div className="bg-light">
            <div className="container">
        <div className="about_blog " >
            <div className="fadeInUp animated animatedFadeUp" style={{ textTransform: 'uppercase' }}>
                <h1 style={{ fontSize: '3rem' }} className="topic" >My Blog</h1>
            </div>
            <div className="about_medium delay1 fadeInUp animated animatedFadeUp">
                <a href="https://medium.com/@Iffanpathan" className="text-info bg-dark"> <SiMedium /> </a>
            </div>
        </div>
         </div>
        </div>
    )
}
export default Blog;