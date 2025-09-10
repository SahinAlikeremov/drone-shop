import React from 'react';
import '../Styles/Contact.css';
import { Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className='contact-head'>Contact Us</h1>
            <hr />

            <div className="contact-location">
                <div className="contact-area">
                    <ol className="contact-desc">
                        <li><FontAwesomeIcon icon={faLocationDot} />Address: <span className='add-contact'>
                            DJI Sky City,No.55 Xianyuan Road,Nanshan District,Shenzhen, China</span></li>
                        <li><FontAwesomeIcon icon={faPhone} />Phone: <span className='add-contact'>
                            +86 (0)755 36383536</span></li>
                        <li>Office Hours: <span className="add-contact">
                            Monday to Friday, 9:00 to 18:00 ( Hong Kong Time GMT+8:00)</span></li>
                    </ol>

                    <ol className="contact-desc desc2">
                        <li>Administration <br /> Partnership: <span className='add-contact'>admin@dji.com</span></li>
                        <li>Legal Affairs: <span className="add-contact">Legal@dji.com</span></li>
                        <li>Supplier Partnership: <span className="add-contact">purchasing@dji.com</span></li>
                    </ol>
                </div>

                <div className="map-area">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29482.526206229097!2d113.93108524995576!3d22.529840843614902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f18ad351f6d1%3A0xa3964503194f6c3d!2sDJI%20FLAGSHIP%20STORE!5e0!3m2!1sen!2saz!4v1757532431513!5m2!1sen!2saz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"

                        style={{ border: 0, width: '790px', height: '450px' }}
                        title="DJI Service Center Map"
                    />
                    <div className="map-overlay2"></div>
                </div>
            </div>

        </div>
    )
}

export default Contact