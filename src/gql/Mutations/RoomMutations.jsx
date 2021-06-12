import gql from "graphql-tag";

export const createRoom = gql`
  mutation createRoom(
    $price: Int!
    $personalID: String!
    $street: String!
    $town_city: String!
    $parish: String!
    $description: String!
  ) {
    createRoom(
      input: {
        price: $price
        street: $street
        town_city: $town_city
        parish: $parish
        personalID: $personalID
        description: $description
      }
    ) {
      id
      price
      street
      town_city
      personalID
      parish
      isAvailable
    }
  }
`;

export const updateRoom = gql`
  mutation updateRoom(
    $id: ID!
    $price: Int!
    $street: String
    $town_city: String
    $parish: String!
    $isAvailable: Boolean
    $description: String!
    $image: String
  ) {
    updateRoom(
      id: $id
      input: {
        price: $price
        street: $street
        town_city: $town_city
        parish: $parish
        isAvailable: $isAvailable
        description: $description
        image: $image
      }
    ) {
      id
    }
  }
`;

export const deleteRoom = gql`
  mutation deleteRoom($id: ID!) {
    deleteRoom(id: $id) {
      street
    }
  }
`;
