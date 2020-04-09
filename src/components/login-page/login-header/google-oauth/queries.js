import gql from 'graphql-tag';

const FIND_OR_CREATE_USER = gql`
  mutation createUser($auth: AuthInput!, $user: UserCreateInput!) {
    createUser(auth: $auth, user: $user) {
      token
    }
  }
`;

export default FIND_OR_CREATE_USER;
