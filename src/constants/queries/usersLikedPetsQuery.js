import gql from 'graphql-tag';

const USERS_LIKED_PETS = gql`
  query likedPets{
    likedPets {	 
      pet {
        id
        photos
        name 
        age 
        size
        shelter {
          city
          email
          id
          latitude
          longitude
          name
          phone
          state
          street
          street_number
          zipcode
        }
      }
    }
  }
`;

export default USERS_LIKED_PETS;