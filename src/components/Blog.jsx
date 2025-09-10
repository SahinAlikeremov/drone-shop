import React from 'react';
import '../Styles/Home.css';
import blogImg1 from '../images/fpv1.webp';
import blogImg2 from '../images/fpv2.webp';
import blogImg3 from '../images/lipo1.webp';
import blogImg4 from '../images/fpv3.webp';

function Blog() {
    return (
        <div className='blog'>
            <h1>FPV Drone Blog</h1>
            <div className="blog-container">
                <div className="blog-image-wrapper">
                    <img src={blogImg1} alt="" />
                </div>
                <div className="blog-image-wrapper">
                    <img src={blogImg2} alt="" />
                </div>
                <div className="blog-image-wrapper">
                    <img src={blogImg3} alt="" />
                </div>
                <div className="blog-image-wrapper">
                    <img src={blogImg4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Blog;