import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import LoginHeader, { text } from '../index';

test('should render footer image', () => {
  const { getByAltText } = render(<LoginHeader />);
  const footer = getByAltText(text.footer.altText);
  expect(footer).toBeInTheDocument();
});
