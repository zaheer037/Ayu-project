import React from 'react';

const DonorSearch = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Fetch donor data
  };

  return (
    <div className="donor-search-container">
      <h2>Find a Donor</h2>
      <form onSubmit={handleSearch}>
        <label>State:</label>
        <select required>
          <option value="">Select State</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
        </select>
        <label>City:</label>
        <select required>
          <option value="">Select City</option>
        </select>
        <label>Area:</label>
        <select required>
          <option value="">Select Area</option>
        </select>
        <label>Blood Group:</label>
        <select required>
          <option value="">Select Blood Group</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonorSearch;
