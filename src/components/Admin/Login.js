import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = { email: email, password: password, status: 200 };

            if (email === "admin@gmail.com" && password === "Bright@123" && response.status === 200) {
                localStorage.setItem("auth", true);
                navigate('/dashboard');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    // Function to handle input change while preserving case
    const handleInputChange = (e, setValue) => {
        const value = e.target.value;
        setValue(value);
        // Force the input value to remain as typed
        e.target.value = value;
    };

    return (
        <div className="login-container">
            <p>Login to Admin Panel</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail)}
                        required
                        style={{
                            textTransform: 'none',
                            WebkitTextTransform: 'none',
                            MozTextTransform: 'none',
                            msTransform: 'none',
                            OTransform: 'none'
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => handleInputChange(e, setPassword)}
                        required
                        style={{
                            textTransform: 'none',
                            WebkitTextTransform: 'none',
                            MozTextTransform: 'none',
                            msTransform: 'none',
                            OTransform: 'none'
                        }}
                    />
                </div>

                <div className={`error-message ${error ? 'active' : ''}`}>
                    {error}
                </div>

                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;