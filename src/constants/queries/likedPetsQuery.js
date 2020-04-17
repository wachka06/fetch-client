import gql from 'graphql-tag';

const GET_LIKED_PETS = gql`
  query {
    likedPets {	 
      pet {
        id
        photos
        distance_to_user
        name 
        age 
        size
        status
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

export default GET_LIKED_PETS;