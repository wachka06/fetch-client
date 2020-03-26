import React from 'react';
import footer from './images/footer.svg';
import { Image } from './styles.module.scss';

export const text = {
  footer: {
    altText: 'Footer image',
  },
};

const Footer = () => (
  <img className={Image} src={footer} alt={text.footer.altText}></img>
);

export default Footer;
