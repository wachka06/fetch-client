import React, { Fragment } from 'react';
import fetchLogo from './images/fetch-logo.svg';
import headerPath from './images/header-path.svg';
import headerPath2 from './images/header-path2.svg';
import './index.css';

export const text = {
  headerlogo: 'Header Logo',
  header: 'Header'
};

const Header = () => (
  <Fragment>
    <img className="Logo" src={fetchLogo} alt={text.headerlogo} />
    <img className="Path" src={headerPath} alt={text.header} />
    <img className="Path2" src={headerPath2} alt={text.header} />
  </Fragment>
);

export default Header;
