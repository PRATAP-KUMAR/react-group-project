import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { ReactComponent as Lost } from '../../images/image1.svg';

const NotFound = () => (
  <div className="error__page__container">
    <div className="error__page__wrapper">
      <div className="error__page__message__container">
        <h1 className="error__page__message">
          Sorry, this page isn&#x27;t available
        </h1>
        <Link to="/">
          <button type="button" className="back__home__btn">
            Go back home
          </button>
        </Link>
      </div>
      <div className="error__page__illustration">
        <Lost style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  </div>
);

export default NotFound;
