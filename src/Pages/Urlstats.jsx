import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Urlstats() {
  const [stats, setStats] = useState({ daily: 0, monthly: 0 });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('https://url-shortener-application-be.onrender.com/url/stats');
        console.log(response.data);
        setStats(response.data);
      } catch (error) {
        setError('Error fetching URL statistics');
      }
    };

    fetchStats();
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: 'darkmagenta' }}>URL Statistics</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Daily URLs</h5>
              <p className="card-text">{stats.daily}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Monthly URLs</h5>
              <p className="card-text">{stats.monthly}</p>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
        <div className='d-flex justify-content-center'>
          <Link to={'/home'}>
            <button className='btn btn-outline-primary mt-3'>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Urlstats;
