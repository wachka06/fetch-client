import gql from 'graphql-tag';

const USER_LOCATION = gql`
  query currentUser {
    currentUser {
      latitude
      longitude
      zipcode
    }
  }
`;

export default USER_LOCATION;
