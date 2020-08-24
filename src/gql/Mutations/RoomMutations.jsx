import gql from "graphql-tag";

export const addRule = gql`
  mutation addRule($id: ID!, $rule: String!) {
    addRule(id: $id, rule: $rule) {
      rules
    }
  }
`;

export const addAmenity = gql`
  mutation addAmenity($id: ID!, $amenity: String!) {
    addAmenity(id: $id, amenity: $amenity) {
      amenities
    }
  }
`;

export const createRoom = gql`
  mutation createRoom(
    $price: Int!
    $personalID: String!
    $occupancy: String!
    $gender: String!
    $street: String!
    $town_city: String!
    $parish: String!
    $amenities: [String!]
    $rules: [String!]
  ) {
    createRoom(
      input: {
        price: $price
        occupancy: $occupancy
        gender: $gender
        street: $street
        town_city: $town_city
        parish: $parish
        rules: $rules
        amenities: $amenities
        personalID: $personalID
      }
    ) {
      price
      occupancy
      gender
      street
      town_city
      personalID
      parish
      amenities
      rules
    }
  }
`;

export const updateRoom = gql`
  mutation updateRoom(
    $id: ID!
    $price: Int
    $occupancy: String
    $gender: String
    $street: String
    $town_city: String
    $parish: String
    $amenities: [String]
    $rules: [String]
    $isAvailable: Boolean
    $isVisible: Boolean
  ) {
    updateRoom(
      id: $id
      input: {
        price: $price
        occupancy: $occupancy
        gender: $gender
        street: $street
        town_city: $town_city
        parish: $parish
        rules: $rules
        amenities: $amenities
        isAvailable: $isAvailable
        isVisible: $isVisible
      }
    ) {
      street
    }
  }
`;
