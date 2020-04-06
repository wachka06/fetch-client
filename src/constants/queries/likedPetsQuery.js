import gql from 'graphql-tag';

const GET_LIKED_PETS = gql`
  query {
    likedPets {	 
      distance
      pet {
        id
        photos
        name 
        age 
        size
        status
        shelter {
          id
          name
        }
      }
    }
  }
`;

export default GET_LIKED_PETS;