import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_ORDER = gql`
mutation addOrder($sauces: [ID]!) {
  addOrder(sauces: $sauces) {
    purchaseDate
    sauces {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
}
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
