import gql from "graphql-tag";

export const getSingleOwnerRooms = gql`
  query myRooms($owner: ID!) {
    getRoomByOwner(ownerId: $owner) {
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
    }
  }
`;

export const getAllRooms = gql`
  query allRooms {
    allRooms {
      price
      occupancy
      gender
      street
      amenities
      rules
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
