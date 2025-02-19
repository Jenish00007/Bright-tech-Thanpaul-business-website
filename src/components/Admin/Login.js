import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { loginService } from "../../services/authService/loginService";
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous errors
    setError('');

    try {
      // Send login request to the Flask backend

      // const response = await axios.post('/login', { email, password });
      // const response = await loginService(email, password);
        const response = { email:email, password:password, status: 200 };
      // if (response.status === 200) {
      // Redirect to the Admin Dashboard (or any other page) upon successful login

      // navigate('/dashboard');
      
      if (email === "ADMIN@GMAIL.COM" && password === "bright123" && response.status === 200) {
        localStorage.setItem("auth", true);
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      // Handle error (Invalid credentials)
      setError('Invalid credentials. Please try again.');
    }
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

        <button className ="login-button" type="submit">Login</button>
        {/* <a href="/forgot-password" className="forgot-password">Forgot password?</a> */}
      </form>
    </div>
  );
};

export default Login;
