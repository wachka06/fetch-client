import React from 'react';
import LoginHeader from './login-header/index.jsx';
import Footer from '../common-components/footer/index';
import LoginBody from './login-body/index.jsx';
import { AppLogin } from './styles.module.scss';

const LoginUI = () => (
  <div className={AppLogin}>
    <LoginHeader />
    <LoginBody />
    <Footer />
  </div>
);

export default LoginUI;
