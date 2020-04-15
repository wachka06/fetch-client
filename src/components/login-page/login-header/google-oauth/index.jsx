import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import googleSignInButton from './images/google_signin.svg';
import { GoogleLogin } from 'react-google-login';
import { useMutation } from '@apollo/react-hooks';
import { Button } from './styles.module.scss';
import FIND_OR_CREATE_USER from '../../../../constants/queries/findOrCreateUserMutation';

export const text = {
  googleSigninButton: {
    altText: 'Sign in with Google button',
  },
};

export const setToken = (token) => {
  localStorage.setItem('auth_token', token);
};

const GOOGLE_CLIENT_ID =
  '615918356762-fs39l16jhv04q3l54bh3pk0882aj9cin.apps.googleusercontent.com';

const GoogleSignIn = () => {
  const [redirectUrl, setRedirectUrl] = useState();
  const [createUser] = useMutation(FIND_OR_CREATE_USER);
  const failureResponseGoogle = (response) => console.log('failure', response);
  const successResponseGoogle = (response) => {
    const authSettings = {
      client_id: GOOGLE_CLIENT_ID,
      id_token: response.tokenId,
    };

    createUser({
      variables: {
        auth: authSettings,
        user: {
          zipcode: '02111',
        },
      },
    })
      .then((response) => setToken(response.data.createUser.token))
      .then(() => setRedirectUrl('/likedPets'))
      .catch((error) => console.error(`Login Error:`, error));
  };
  if (redirectUrl) {
    return <Redirect to={redirectUrl} />;
  } else {
    return (
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <img
            className={Button}
            src={googleSignInButton}
            alt={text.googleSigninButton.altText}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          ></img>
        )}
        buttonText="Login"
        onSuccess={successResponseGoogle}
        onFailure={failureResponseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    );
  }
};

export default GoogleSignIn;
