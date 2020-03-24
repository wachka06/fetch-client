import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import LoginHeader, { text } from '../index';
import { text as button } from '../google-oauth/index'

test('should render headline and subhead of page', () => {
  const { getByText } = render(<LoginHeader />);
  const headline = getByText(text.headline);
  const subHead = getByText(text.subHead);
  expect(headline).toBeInTheDocument;
  expect(subHead).toBeInTheDocument;
});

test('should render logo and google sign-in images', () => {
  const { getByAltText } = render(<LoginHeader />);
  const logo = getByAltText(text.logo.altText);
  const googleSignIn = getByAltText(button.googleSigninButton.altText);
  expect(logo).toBeInTheDocument();
  expect(googleSignIn).toBeInTheDocument();
});
