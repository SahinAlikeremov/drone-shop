import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = () => {
            const logged = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(logged === 'true');
        };

        checkLogin();

        // Storage değişikliklerini dinle (diğer tablarda da güncel kalsın)
        window.addEventListener('storage', checkLogin);

        return () => {
            window.removeEventListener('storage', checkLogin);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div className='main'>
            <ul className="navbar">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/drones">Drones</NavLink></li>
                <li><NavLink to="/accessories">Accessories</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>

            <nav>
                {isLoggedIn ? (
                    <>
                        <NavLink to="/cart" className="cart-btn">Cart</NavLink>
                        <button onClick={handleLogout} className="logout-btn">Log Out</button>
                    </>
                ) : (
                    <>
                        <NavLink className="lg" to="/login">Log In</NavLink>
                        <NavLink className="sn" to="/sign">Sign Up</NavLink>
                    </>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
