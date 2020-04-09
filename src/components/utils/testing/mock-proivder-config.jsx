import FIND_OR_CREATE_USER from '../../login-page/login-header/google-oauth/queries';

export const googleLoginMock = [
  {
    request: {
      query: FIND_OR_CREATE_USER,
      variables: {
        auth: {
          client_id: 'GoogleSuppliedClientId',
          id_token: 'ExampleIdToken',
        },
        user: {
          zipcode: '02111',
        },
      },
    },
    result: {
      data: {
        createUser: {
          token: 'ExampleVerifiedJWT',
        },
      },
    },
  },
];
