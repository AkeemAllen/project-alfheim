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
  ) {
    createRoom(
      input: {
        price: $price
        occupancy: $occupancy
        gender: $gender
        street: $street
        town_city: $town_city
        parish: $parish
        personalID: $personalID
      }
    ) {
      id
      price
      occupancy
      gender
      street
      town_city
      personalID
      parish
      amenities
      rules
      isAvailable
      isVisible
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
    $image: String
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

export const deleteSingleRule = gql`
  mutation deleteSingleRule($id: ID!, $ruleToDelete: String!) {
    deleteSingleRule(id: $id, ruleToDelete: $ruleToDelete) {
      id
    }
  }
`;

export const deleteSingleAmenity = gql`
  mutation deleteSingleAmenity($id: ID!, $amenityToDelete: String!) {
    deleteSingleAmenity(amenityToDelete: $amenityToDelete, id: $id) {
      id
    }
  }
`;
