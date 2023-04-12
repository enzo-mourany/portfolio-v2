import React, { useState } from 'react';
import Cookies from 'js-cookie'

const CookiePopup: React.FC = () => {
  const [acceptedCookies, setAcceptedCookies] = useState<boolean>(false);

  const handleAcceptCookies = () => {
    Cookies.set('myCookie', 'cookie value');
    setAcceptedCookies(true);
  };

  const handleRefuseCookies = () => {
    setAcceptedCookies(false);
  };

  if (!acceptedCookies) {
    return (
      <div className='cookie-popup'>
        <p>Voulez-vous accepter les cookies pour améliorer votre expérience sur notre site web ?</p>
        <button onClick={handleAcceptCookies}>Accepter</button>
        <button onClick={handleRefuseCookies}>Refuser</button>
      </div>
    );
  } else {
    return null;
  }
};

export default CookiePopup;
