import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import LoginUI from '../index';
import { text as loginBodyText } from '../login-body/index';
import { text as loginHeaderText } from '../login-header/index';
import { text as loginButton } from '../login-header/google-oauth/index';
import { MockedProvider } from '@apollo/react-testing';
import { googleLoginMock as mock } from '../../utils/testing/mock-proivder-config';

test('should render all child copy', () => {
  const { getByText } = render(
    <MockedProvider mocks={mock} addTypename={false}>
      <LoginUI />
    </MockedProvider>
  );

  const bodySubTitle = getByText(loginBodyText.primarySubHead);
  const bodyTitle = getByText(loginBodyText.primaryHeadline);
  const discoverDescription = getByText(
    loginBodyText.DownloadContent[0].description
  );
  const discoverTitle = getByText(
    loginBodyText.DownloadContent[0].title.toUpperCase()
  );
  const downloadButtons = getByText(loginBodyText.primaryCTA);
  const findPetDescription = getByText(
    loginBodyText.DownloadContent[1].description
  );
  const findPetTitle = getByText(
    loginBodyText.DownloadContent[1].title.toUpperCase()
  );
  const furreverDescription = getByText(
    loginBodyText.DownloadContent[2].description
  );
  const furreverTitle = getByText(
    loginBodyText.DownloadContent[2].title.toUpperCase()
  );
  const headline = getByText(loginHeaderText.headline);
  const subHead = getByText(loginHeaderText.subHead);

  expect(bodySubTitle).toBeInTheDocument();
  expect(bodyTitle).toBeInTheDocument();
  expect(discoverDescription).toBeInTheDocument();
  expect(discoverTitle).toBeInTheDocument();
  expect(downloadButtons).toBeInTheDocument();
  expect(findPetDescription).toBeInTheDocument();
  expect(findPetTitle).toBeInTheDocument();
  expect(furreverDescription).toBeInTheDocument();
  expect(furreverTitle).toBeInTheDocument();
  expect(headline).toBeInTheDocument;
  expect(subHead).toBeInTheDocument;
});

test('should render all child images', () => {
  const { getByAltText } = render(
    <MockedProvider mocks={mock} addTypename={false}>
      <LoginUI />
    </MockedProvider>
  );

  const androidButton = getByAltText(loginBodyText.androidStoreButton.altText);
  const appleButton = getByAltText(loginBodyText.appleStoreButton.altText);
  const discoverImage = getByAltText(loginBodyText.DownloadContent[0].altText);
  const findPetImage = getByAltText(loginBodyText.DownloadContent[1].altText);
  const furreverImage = getByAltText(loginBodyText.DownloadContent[2].altText);
  const googleSignIn = getByAltText(loginButton.googleSigninButton.altText);
  const heroImage = getByAltText(loginBodyText.heroImage.altText);
  const logo = getByAltText(loginHeaderText.logo.altText);

  expect(androidButton).toBeInTheDocument();
  expect(appleButton).toBeInTheDocument();
  expect(discoverImage).toBeInTheDocument();
  expect(findPetImage).toBeInTheDocument();
  expect(furreverImage).toBeInTheDocument();
  expect(googleSignIn).toBeInTheDocument();
  expect(heroImage).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
