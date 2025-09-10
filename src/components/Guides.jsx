import React from 'react';
import '../Styles/Home.css';

function Guides({ image1 }) {
    return (
        <div className='main-container'>
            <h1>Buying Guides</h1>
            <div className="guides">
                <div className="guide guide1">
                    <p className='guideCard'>DJI Mini 4 Pro vs. DJI Air 3S vs. DJI Mavic 3 Pro</p>
                    <p className='bottom-text'>Everything you need to know about our popular trio</p>
                </div>

                <div className="guide guide2">
                    <p className='guideCard card2'>Follow Me Drones 2024</p>
                    <p className='bottom-text text2'>Best drones that follow you automatically</p>
                </div>

                <div className="guide guide3">
                    <p className='guideCard'>DJI Air 3S vs DJI Air 3</p>
                    <p className='bottom-text'>Is it worth the upgrade？</p>
                </div>

                <div className="guide guide4">
                    <p className='guideCard'>DJI Avata 2 vs DJI Avata</p>
                    <p className='bottom-text'>What's new?</p>
                </div>
            </div>
        </div>
    );
}

export default Guides;



{/* <div className="product-card">
                    <div className="product-image">
                        <img src={image1} alt={name1} />
                        <div className="carousel-buttons">
                            <button className="left-btn">‹</button>
                            <button className="right-btn">›</button>
                        </div>
                    </div>
                    <div className="product-info">
                        <p className="product-category">{category1}</p>
                        <h3 className="product-name">{name1}</h3>
                        <p className="product-price">From USD ${price1}</p>
                    </div>
                </div> */}