import gql from "graphql-tag";

export const updatePrice = gql`
  mutation updateRoom($id: ID!, $price: Int!) {
    updateRoom(id: $id, input: { price: $price }) {
      street
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

export const updateGender = gql`
  mutation updateRoom($id: ID!, $gender: String!) {
    updateRoom(id: $id, input: { gender: $gender }) {
      street
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

export const updateOccupancy = gql`
  mutation updateRoom($id: ID!, $occupancy: String!) {
    updateRoom(id: $id, input: { occupancy: $occupancy }) {
      street
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
  mutation updateRoom($id: ID!, $isAvailable: Boolean!) {
    updateRoom(id: $id, input: { isAvailable: $isAvailable }) {
      street
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

export const updateVisibility = gql`
  mutation updateRoom($id: ID!, $isVisible: Boolean!) {
    updateRoom(id: $id, input: { isVisible: $isVisible }) {
      street
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

export const updateStreet = gql`
  mutation updateRoom($id: ID!, $street: String!) {
    updateRoom(id: $id, input: { street: $street }) {
      street
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

export const updateTown = gql`
  mutation updateRoom($id: ID!, $town_city: String!) {
    updateRoom(id: $id, input: { town_city: $town_city }) {
      street
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

export const updateParish = gql`
  mutation updateRoom($id: ID!, $parish: String!) {
    updateRoom(id: $id, input: { parish: $parish }) {
      street
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
