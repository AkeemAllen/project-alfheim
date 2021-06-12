import gql from "graphql-tag";

export const getSingleOwnerRooms = gql`
  query myRooms($uuid: String!) {
    getRoomByOwner(ownerId: $uuid) {
      street
      parish
      id
      town_city
      price
      isAvailable
      personalID
      image
    }
  }
`;

export const getAllRooms = gql`
  query allRooms {
    allRooms {
      price
      personalID
      street
      image
      isAvailable
      owner {
        email
        username
        firstname
        lastname
        contact
      }
    }
  }
`;
