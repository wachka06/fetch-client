import React, { Fragment } from 'react';
import logoImage from './../../common-components/images/logo-black.svg';
import { Container, Headline, SubHead, Logo } from './styles.module.scss';
import GoogleSignIn from './google-oauth/index';

export const text = {
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
      <GoogleSignIn />
    </main>
  </Fragment>
);

export default LoginHeader;
