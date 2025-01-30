import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { loginService } from "../../services/authService/loginService";
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous errors
    setError('');

    try {
      // Send login request to the Flask backend

    //   const response = await axios.post('/login', { email, password });
        const response = await loginService(email, password);
      if (response.status === 200) {
        // Redirect to the Admin Dashboard (or any other page) upon successful login
        navigate('/admin-dashboard');
      }
    } catch (err) {
      // Handle error (Invalid credentials)
      setError('Invalid credentials. Please try again.');
    }
  };


  return (
    <div className="login-container">
      <h2>Login to Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <div className={`error-message ${error ? 'active' : ''}`}>
          {error}
        </div>

        <button type="submit">Login</button>
        <a href="/forgot-password" className="forgot-password">Forgot password?</a>
      </form>
    </div>
  );
};

export default Login;
