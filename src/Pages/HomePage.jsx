import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUrl from './CreateUrl';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { username } = state || { username: 'User' };

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('token');
    console.log('Token removed from local storage');
    navigate('/login');
  };

  return (

    <div className="container home-page py-5 mt-5 mb-5" >

      <div className="d-flex justify-content-end ">

        <button className="btn btn-danger" onClick={handleLogout} >Logout <i className="bi bi-box-arrow-right"></i></button>
      </div>
      <h3 className='text-center mt-4'>Welcome to the Url-Shortener Application {username}...!!!</h3>

      <div className="text-center mt-4">

        <CreateUrl /><br />
        <h3 style={{ color: 'lightblue', textDecoration: 'underline' }}>DashBoard</h3>
        <div className="d-flex justify-content-center gap-5 mt-4">

          <Link to={'/stats'}>
            <button className='btn btn-info'>URL Statistics</button>
          </Link>
          <Link to={'/urls'}>
            <button className='btn btn-info'>URL List</button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default HomePage;