import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem('userData')) || [];

        if (storedUsers.length === 0) {
            setError('No account found. Please sign up first.');
            return;
        }

        const user = storedUsers.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    }

    return (
        <div className='login'>
            <div className="logform">
                <h1>Log In</h1>
                <form className='loginform' onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p><a className='forgot' href="">Forgot Password?</a></p>
                    <button className='logbtn'>Log In</button>
                    <p>Don't have an account? <NavLink className='register' to="/sign">Sign Up</NavLink></p> 
                </form>
            </div>
        </div>
    )
}

export default Login;
