import React, { useState } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { Button } from 'antd';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import Cookies from 'js-cookie';

const NavButton = (props) => {
  const [redirectPath, setRedirectPath] = useState(null);
  const accessToken = Cookies.get('access_token');
  const isLoggedIn = accessToken && accessToken !== '';

  const logout = () => {
    ReactGA.event({
      category: 'Auth',
      action: 'Log out button pressed',
      label: 'Navbar',
    });

    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    Cookies.remove('userID');

    props.setAccessToken && props.setAccessToken(null);
    props.setRefreshToken && props.setRefreshToken(null);

    window.location = '/';
  };

  const login = () => {
    ReactGA.event({
      category: 'Auth',
      action: 'Log in button pressed',
      label: 'Navbar',
    });

    const URI = process.env.REACT_APP_API_URL;
    window.location = `${URI}/login`;
  };

  if (redirectPath) {
    return <Redirect to={redirectPath} />;
  }

  return (
    <div>
      <Button
        shape="round"
        size="medium"
        className={'spotifyColor'}
        style={{
          float: 'right',
          marginTop: '0.5em',
        }}
        onClick={isLoggedIn ? logout : login}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <FaSpotify
            style={{
              height: '1.5em',
              width: '1.5em',
              marginRight: '5px',
            }}
          />
          {isLoggedIn ? 'Log out' : 'Log in'}
        </span>
      </Button>
    </div>
  );
};

export default NavButton;
