import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const [formData, setFormData] = useState({ password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://url-shortener-application-be.onrender.com/user/reset-password/${token}`, formData);
      setMessage('Password reset successfully.');
      setTimeout(() => {
        window.close();
      }, 3000);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className='row d-flex justify-content-center'>
        <div className='col-sm-12 col-md-8 col-lg-6 col-xl-6'>
          <div className="container reset-page mt-5 px-4 py-4">
            <div className='row d-flex justify-content-center'>
              <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
                <h3 className='text-center'>Url-Shortener Application</h3>
                <h3 className="text-center">Reset Password</h3><br />
                <form onSubmit={handleSubmit}>
                  {message && <div className="alert alert-success">{message}</div>}
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-control py-2 reset-password-input"
                      placeholder="Enter new password"
                      value={formData.password}
                      onChange={(e) => setFormData(prevState => ({ ...prevState, password: e.target.value }))}
                    />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary">
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
