import React from 'react';
import '../Styles/Home.css';
import chooseImg1 from '../images/meps-image.webp';
import chooseImg2 from '../images/secure-payment.webp';
import chooseImg3 from '../images/return.webp';
import chooseImg4 from '../images/brand-pc.webp';

function Choose() {
    return (
        <div className="container">
            <h1>Why Choose DroneShop</h1>
            <div className="choose-container">
                <img src={chooseImg1} alt="" />
                <img src={chooseImg2} alt="" />
                <img src={chooseImg3} alt="" />
                <img className='brandImg' src={chooseImg4} alt="" />
            </div>
        </div>

    )
}

export default Choose;