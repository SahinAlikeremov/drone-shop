import React from 'react';
import '../Styles/Services.css';
import { Router } from 'react-router-dom';
function Services() {
    return (
        <div className="servo-container">
            <h1 className="servo-head">Services</h1>
            <hr />
            <div className="map-wrap">
                <div className="map-area2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87385.17846716545!2d121.05818771759013!3d14.546809358881452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x261c2850cd74afed%3A0x2d2978fb2fcb6123!2sDJI%20Service%20Center!5e0!3m2!1sen!2saz!4v1757526804248!5m2!1sen!2saz"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0, width: '790px', height: '450px' }}
                    title="DJI Service Center Map"
                />
                <div className="map-overlay"></div>
                </div>
            </div>

            <div className="services-location">
                <div className="services-desc">
                    <p className='chino'><span className='servo-address'>Address: <br /></span>Unit 8, La Fuerza Plaza, Chino Roces Ave, Makati City, 1233 Metro Manila, Philippines</p>
                    <p className='chino'><span className='servo-address'>Phone Number: </span>+63 920 578 8216</p>
                  <p className="servo-address">Services:</p>
                        <ol className='farlands'>
                            <li className='rp'>Repair Service</li>
                            <li className='rp'>Troubleshooting GPS, IMU, and compass issues</li>
                            <li className='rp'>Beginner and advanced flight training</li>
                            <li className='rp'>Installation of ND filters, landing gear, and propeller guards</li>
                            <li className='rp'>Crash damage evaluation</li>
                            <li className='rp'>Data recovery from flight logs</li>
                        </ol>
            
                </div>
            </div>
        </div>
    )
}

export default Services