import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkLogin = () => {
            const logged = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(logged === 'true');
        };

        checkLogin();
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
            {/* Hamburger */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>

            {/* Main Menu */}
            <ul className={`navbar ${menuOpen ? "open" : ""}`}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/drones">Drones</NavLink></li>
                <li><NavLink to="/accessories">Accessories</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>

                {/* Mobil görünüşdə də bunlar görünsün deyə buraya əlavə etdim */}
                <div className="mobile-auth">
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
                </div>
            </ul>

            {/* Desktop üçün sağ yuxarı */}
            <nav className="desktop-auth">
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
