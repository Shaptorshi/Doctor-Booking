import React from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
  return (
    <div className="reset-container">
      <div className="reset-box">
        <Link to="/login" className="back-link">← Back to Sign In</Link>

        <h1 className="title">Reset your password</h1>
        <p className="subtitle">
          Enter your email address below and we’ll send you a link to reset your password.
        </p>

        <form className="reset-form">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <button type="submit" className="reset-btn">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
