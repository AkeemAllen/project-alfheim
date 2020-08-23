import gql from "graphql-tag";

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

export const updatePrice = gql`
  mutation updatePrice($id: ID!, $price: Int!) {
    updateRoom(id: $id, input: { price: $price }) {
      street
      parish
      town_city
      gender
      occupancy
      price
      isAvailable
      isVisible
      personalID
    }
  }
`;

export const updateGender = gql`
  mutation updateGender($id: ID!, $gender: String!) {
    updateRoom(id: $id, input: { gender: $gender }) {
      street
      parish
      town_city
      gender
      occupancy
      price
      isAvailable
      isVisible
      personalID
    }
  }
`;

export const updateOccupancy = gql`
  mutation updateOccupancy($id: ID!, $occupancy: String!) {
    updateRoom(id: $id, input: { occupancy: $occupancy }) {
      street
      personalID
      parish
      town_city
      gender
      occupancy
      price
      isAvailable
      isVisible
    }
  }
`;

export const updateAvailability = gql`
  mutation updateAvailability($id: ID!, $isAvailable: Boolean!) {
    updateRoom(id: $id, input: { isAvailable: $isAvailable }) {
      street
      parish
      town_city
      gender
      personalID
      occupancy
      price
      isAvailable
      isVisible
    }
  }
`;

export const updateVisibility = gql`
  mutation updateVisibility($id: ID!, $isVisible: Boolean!) {
    updateRoom(id: $id, input: { isVisible: $isVisible }) {
      street
      parish
      town_city
      personalID
      gender
      occupancy
      price
      isAvailable
      isVisible
    }
  }
`;

export const updateStreet = gql`
  mutation updateStreet($id: ID!, $street: String!) {
    updateRoom(id: $id, input: { street: $street }) {
      street
      parish
      town_city
      personalID
      gender
      occupancy
      price
      isAvailable
      isVisible
    }
  }
`;

export const updateTown = gql`
  mutation updateTown($id: ID!, $town_city: String!) {
    updateRoom(id: $id, input: { town_city: $town_city }) {
      street
      parish
      town_city
      gender
      occupancy
      personalID
      price
      isAvailable
      isVisible
    }
  }
`;

export const updateParish = gql`
  mutation updateParish($id: ID!, $parish: String!) {
    updateRoom(id: $id, input: { parish: $parish }) {
      street
      parish
      town_city
      gender
      occupancy
      price
      personalID
      isAvailable
      isVisible
    }
  }
`;
