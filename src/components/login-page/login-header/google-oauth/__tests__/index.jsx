import '@testing-library/jest-dom';

import { setToken } from '../index';

test('should record the auth token in local storage on successful login attempts', () => {
  const mockTokenValue = 'A Mock Token';
  setToken(mockTokenValue);
  expect(localStorage.getItem('auth_token')).toBe(mockTokenValue);
});
