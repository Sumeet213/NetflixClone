import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {}
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Breaking Bad is an American crime drama television series created and
          produced by Vince Gilligan. Set and filmed in Albuquerque, New Mexico,
          the series follows Walter White (Bryan Cranston), an underpaid,
          overqualified, and dispirited high-school chemistry teacher who is
          struggling with a recent diagnosis of stage-three lung cancer. White
          turns to a life of crime and partners with a former student, Jesse
          Pinkman (Aaron Paul), to produce and distribute crystal meth to secure`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
