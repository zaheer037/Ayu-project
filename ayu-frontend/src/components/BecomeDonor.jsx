import React from 'react';

const BecomeDonor = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // Submit donor registration data
    alert('Thank you for registering as a donor!');
  };

  return (
    <div className="become-donor-container">
      <h2>Become a Donor</h2>
      <form onSubmit={handleRegister}>
        <label>Full Name:</label>
        <input type="text" required />
        <label>Blood Group:</label>
        <select required>
          <option value="">Select Blood Group</option>
        </select>
        <label>City:</label>
        <input type="text" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BecomeDonor;
