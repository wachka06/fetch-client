import FIND_OR_CREATE_USER from '../../../constants/queries/findOrCreateUserMutation'

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
