import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages';
import AdminDashboard from './pages/admin/dashboard';
import AdminHospitalDashboard from './pages/admin/hospital';
import AdminPackageDashboard from './pages/admin/package';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/admin/hospital' element={<AdminHospitalDashboard/>}/>
      <Route path='/admin/package' element={<AdminPackageDashboard/>}/>
    </Routes>
  );
}

export default App;

export const checkSessionisValid = () => {
  const sessionData = JSON.parse(localStorage.getItem('userSession'));
  console.log('Session data:', sessionData);

  if (sessionData && sessionData.expiry > Date.now()) {
    console.log('Session is valid');
    return true; // Session is valid
  } else {
    console.log('Session is invalid or expired');
    localStorage.removeItem('userSession'); // Remove expired session
    return false; // Session has expired or doesn't exist
  }
};

