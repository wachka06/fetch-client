import gql from 'graphql-tag';

const GET_LIKED_PET = gql`
  query($id:ID!) {
    likedPet(id:$id) {
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
`

export default GET_LIKED_PET;