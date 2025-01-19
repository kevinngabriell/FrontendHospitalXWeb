import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages';
import AdminDashboard from './pages/admin/dashboard';
import AdminHospitalDashboard from './pages/admin/hospital';
import AdminPackageDashboard from './pages/admin/package';
import AddNewSoftwarePackage from './pages/admin/package/addnewpackage';
import AddNewHospitalByAdmin from './pages/admin/hospital/addnewhospital';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/admin' element={<AdminDashboard/>}/>
      {/* Hospital Management By Admin */}
      <Route path='/admin/hospital' element={<AdminHospitalDashboard/>}/>
      <Route path='/admin/hospital/addnewhospital' element={<AddNewHospitalByAdmin/>}/>
      {/* Package Management By Admin */}
      <Route path='/admin/package' element={<AdminPackageDashboard/>}/>
      <Route path='/admin/package/addnewpackage' element={<AddNewSoftwarePackage/>}/>
    </Routes>
  );
}

export default App;

// Global Function to check the session is valid or not
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

