import React, { useState } from 'react';
import axios from 'axios';

function CreateUrl() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://url-shortener-application-be.onrender.com/url/create-url', { longUrl });
      console.log(response.data);
      setShortUrl(`https://url-shortener-application-be.onrender.com/url/${response.data.url}`);
      setMessage('URL created successfully');
    } catch (error) {
      console.error('Error creating URL:', error);
      setMessage('Error creating URL');
    }
  };

  return (
    <div>
      <h2 style={{ color: 'gold', textDecoration: 'underline' }}>Create Short URL</h2>       
       <br />
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter Long Url Here..!"
          value={longUrl}
          style={{ border: '2px solid blue', borderRadius: '10px', padding: '20px' }}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit" className='btn btn-success'>Create URL</button>
      </form>
      {message && <p>{message}</p>}
      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
}

export default CreateUrl;
