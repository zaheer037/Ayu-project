import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout logic
    navigate('/login');
  };

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>You won't be available as a donor if logged out, until you login again.</p>
      <button onClick={handleLogout}>Yes</button>
      <button onClick={() => navigate(-1)}>No</button>
    </div>
  );
};

export default Logout;
