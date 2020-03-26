import React, { Fragment } from 'react';
import googleButton from './images/google_signin.svg';
import logoImage from './../../common-components/images/logo-black.svg';
import { Container, Headline, SubHead, Logo } from './styles.module.scss';

export const text = {
  googleSigninButton: {
    altText: 'Sign in with Google button',
  },
  headline: 'Find your furrever best friend',
  logo: {
    altText: 'Fetch logo',
  },
  subHead:
    'Join us and start browsing all the lovable pets looking for a home near you.',
};

const LoginHeader = () => (
  <Fragment>
    <img className={Logo} src={logoImage} alt={text.logo.altText}></img>
    <main className={Container}>
      <h1 className={Headline}>{text.headline}</h1>
      <h2 className={SubHead}>{text.subHead}</h2>
      <a href="googleAuth">
        <img src={googleButton} alt={text.googleSigninButton.altText}></img>
      </a>
    </main>
  </Fragment>
);

export default LoginHeader;
