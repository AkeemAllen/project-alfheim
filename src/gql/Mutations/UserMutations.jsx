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
  mutation register(
    $email: String!
    $password: String!
    $firstname: String!
    $lastname: String!
    $username: String!
  ) {
    createUser(
      userInput: {
        username: $username
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
        contact: ""
      }
    ) {
      email
    }
  }
`;
