import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Submit signup data to backend
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input type="text" required />
        <label>Date of Birth:</label>
        <input type="date" required />
        <label>City:</label>
        <input type="text" required />
        <label>Mobile Number:</label>
        <input type="tel" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
