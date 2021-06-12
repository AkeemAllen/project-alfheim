import gql from "graphql-tag";

export const updateUserInfo = gql`
  mutation updateUser(
    $email: String!
    $username: String!
    $firstname: String!
    $lastname: String!
    $contact: String!
  ) {
    updateUser(
      userInput: {
        username: $username
        firstname: $firstname
        lastname: $lastname
        email: $email
        contact: $contact
      }
    ) {
      username
      firstname
      lastname
      email
      contact
    }
  }
`;

export const register = gql`
  mutation addUser($uuid: String!) {
    addUser(input: { uuid: $uuid, email: "", name: "", phoneNumber: "" }) {
      id
      uuid
    }
  }
`;
