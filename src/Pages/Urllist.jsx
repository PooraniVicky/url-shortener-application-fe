import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Urllist() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get('https://url-shortener-application-be.onrender.com/url/urls');
        console.log(response.data);
        if (response.data && Array.isArray(response.data.urls)) {
          setUrls(response.data.urls);
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching URLs:', error);
        setUrls([]); // Set urls to an empty array in case of an error
      }
    };

    fetchUrls();
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div className="container url-list mt-5 py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-10 col-lg-10">
          <h2 className="text-center" style={{ color: 'darkmagenta' }}>URL List</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Short URL</th>
                  <th>Long URL</th>
                  <th>Clicks</th>
                </tr>
              </thead>
              <tbody>
                {urls.map((url) => (
                  <tr key={url._id}>
                    <td>{url.shortUrl}</td>
                    <td>{url.longUrl}</td>
                    <td>{url.clickCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link to={'/home'}>
              <button className="btn btn-outline-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Urllist;
