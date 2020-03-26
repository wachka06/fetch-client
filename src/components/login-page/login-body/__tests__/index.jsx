import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import LoginBody, { text } from '../index';

test('should render download now body copy', () => {
  const { getByText } = render(<LoginBody />);
  const bodyTitle = getByText(text.primaryHeadline);
  const bodySubTitle = getByText(text.primarySubHead);
  const discoverTitle = getByText(text.DownloadContent[0].title.toUpperCase());
  const findPetTitle = getByText(text.DownloadContent[1].title.toUpperCase());
  const furreverTitle = getByText(text.DownloadContent[2].title.toUpperCase());
  const discoverDescription = getByText(text.DownloadContent[0].description);
  const findPetDescription = getByText(text.DownloadContent[1].description);
  const furreverDescription = getByText(text.DownloadContent[2].description);
  const downloadButtons = getByText(text.primaryCTA);
  expect(bodyTitle).toBeInTheDocument();
  expect(bodySubTitle).toBeInTheDocument();
  expect(discoverTitle).toBeInTheDocument();
  expect(findPetTitle).toBeInTheDocument();
  expect(furreverTitle).toBeInTheDocument();
  expect(discoverDescription).toBeInTheDocument();
  expect(findPetDescription).toBeInTheDocument();
  expect(furreverDescription).toBeInTheDocument();
  expect(downloadButtons).toBeInTheDocument();
});

test('should render download now hero image and bullet point images', () => {
  const { getByAltText } = render(<LoginBody />);
  const heroImage = getByAltText(text.heroImage.altText);
  const discoverImage = getByAltText(text.DownloadContent[0].altText);
  const findPetImage = getByAltText(text.DownloadContent[1].altText);
  const furreverImage = getByAltText(text.DownloadContent[2].altText);
  const appleButton = getByAltText(text.appleStoreButton.altText);
  const androidButton = getByAltText(text.androidStoreButton.altText);
  expect(heroImage).toBeInTheDocument();
  expect(discoverImage).toBeInTheDocument();
  expect(findPetImage).toBeInTheDocument();
  expect(furreverImage).toBeInTheDocument();
  expect(appleButton).toBeInTheDocument();
  expect(androidButton).toBeInTheDocument();
});
