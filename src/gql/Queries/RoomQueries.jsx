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
    }
  }
`;
