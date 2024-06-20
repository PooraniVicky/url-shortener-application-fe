import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import ForgotPasswordPage from './Components/ForgetPasswordPage';
import ResetPasswordPage from './Components/ResetPasswordPage';
import HomePage from './Pages/HomePage';
import Urllist from './Pages/Urllist';
import Urlstats from './Pages/Urlstats';
import ActivateAccount from './Components/ActivateAccount';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/stats" element={<Urlstats />} />
          <Route path="/urls" element={<Urllist />} />
          <Route path="/activate/:token" element={<ActivateAccount />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;