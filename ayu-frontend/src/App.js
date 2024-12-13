import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import DonorSearch from './components/DonorSearch';
import BecomeDonor from './components/BecomeDonor';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/donor-search" element={<DonorSearch />} />
          <Route path="/become-donor" element={<BecomeDonor />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

