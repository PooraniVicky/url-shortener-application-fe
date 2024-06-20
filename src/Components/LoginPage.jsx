import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://url-shortener-application-be.onrender.com/user/login', { email, password });
      console.log('Server Response:', response.data);
      // Store token in local storage
      const { token, username } = response.data;
      localStorage.setItem('token', token);
      setMessage('Login Successful...!')
      // Navigate to home page
      navigate('/home', { state: { username } });


    } catch (error) {
      setError('Error during login:', error.response ? error.response.data : error.message);
      setMessage('Invalid credentials');
    }
  };


  return (
    <div className="container mt-5 px-2 ">
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          <div className='container mt-5 py-4 login-form'>
            <div className='row d-flex justify-content-center align-items-center'>

              <div className='col-sm-12 col-md-10 col-lg-8 col-xl-8'>
                <h3 className='text-center'>Url-Shortener Application</h3>
                <h1 className='text-center'><i className="bi bi-person-fill"> User Login</i></h1>
                <form>
                  {message && <div className="alert alert-success">{message}</div>}
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="mb-3">
                    <label className="form-label"><i className="bi bi-envelope-at"> Email</i></label>
                    <input
                      type="email"
                      className="form-control email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><i className="bi bi-key"> Password</i></label>
                    <input
                      type="password"
                      className="form-control password-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-link p-0 mt-2"
                      onClick={() => navigate('/forgot-password')}
                      style={{ textDecoration: 'none', color: 'red' }}
                    >
                      Forgot Password...?
                    </button>
                  </div>
                  <div className='d-flex justify-content-center gap-4'>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => navigate('/signup')}
                    >
                      SignUp
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

export default LoginPage;