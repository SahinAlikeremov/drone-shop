import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Sign.css';

function Sign() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
        birthDate: ''
    });

    const navigate = useNavigate(); 
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.surname.trim()) newErrors.surname = "Surname is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) newErrors.email = "Email is required";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid Email";

        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

        const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
        if (!formData.phone) newErrors.phone = "Phone number is required";
        else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone format must be 123-456-78-90";

        if (!formData.birthDate) newErrors.birthDate = "Birth date is required";
        else if (calculateAge(formData.birthDate) < 16) newErrors.birthDate = "You must be at least 16 years old";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // localStorage’dan kullanıcıları al
            let users = JSON.parse(localStorage.getItem('userData'));
            if (!Array.isArray(users)) users = [];

            // Email zaten kayıtlı mı kontrol et
            const exists = users.find(u => u.email === formData.email);
            if (exists) {
                alert("Email already registered");
                return;
            }

            // Yeni kullanıcıyı ekle
            users.push(formData);
            localStorage.setItem('userData', JSON.stringify(users));

            alert("Sign up successful!");
            navigate('/login');

            setFormData({
                name: '',
                surname: '',
                email: '',
                password: '',
                phone: '',
                birthDate: ''
            });
        }
    }

    return (
        <div className="sign">
            <div className="signform">
                <h1>Sign Up</h1>
                <form className='signp' onSubmit={handleSubmit}>
                    <input
                        className='nomargin'
                        type="text"
                        name="name"
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, name: '' });
                        }}
                    />
                    {errors.name && <span className="error error1">{errors.name}</span>}

                    <input
                        type="text"
                        name="surname"
                        placeholder='Enter your surname'
                        value={formData.surname}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, surname: '' });
                        }}
                    />
                    {errors.surname && <span className="error error2">{errors.surname}</span>}

                    <input
                        className='nomargin'
                        type="email"
                        name="email"
                        placeholder='Enter your email'
                        value={formData.email}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, email: '' });
                        }}
                    />
                    {errors.email && <span className="error error3">{errors.email}</span>}

                    <input
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        value={formData.password}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, password: '' });
                        }}
                    />
                    {errors.password && <span className="error error4">{errors.password}</span>}

                    <input
                        className='phoneNumber'
                        type="tel"
                        name="phone"
                        placeholder='Enter Your Phone Number'
                        value={formData.phone}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, phone: '' });
                        }}
                    />
                    {errors.phone && <span className="error error5">{errors.phone}</span>}

                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={(e) => {
                            handleChange(e);
                            setErrors({ ...errors, birthDate: '' });
                        }}
                    />
                    {errors.birthDate && <span className="error error6">{errors.birthDate}</span>}

                    <button type="submit" className="signbtn">Sign Up</button>
                    <p>Already have an account? <NavLink className='register' to='/login'>Login</NavLink></p>
                </form>
            </div>
        </div>
    );
}

export default Sign;
