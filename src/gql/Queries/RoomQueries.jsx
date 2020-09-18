import gql from "graphql-tag";

export const getSingleOwnerRooms = gql`
  query myRooms($uuid: String!) {
    getRoomByOwner(ownerId: $uuid) {
      street
      parish
      id
      town_city
      occupancy
      gender
      price
      isAvailable
      isVisible
      amenities
      rules
      personalID
      image
      isVisible
    }
  }
`;

export const getAllRooms = gql`
  query allRooms {
    allRooms {
      price
      occupancy
      gender
      personalID
      street
      amenities
      rules
      image
      isVisible
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
