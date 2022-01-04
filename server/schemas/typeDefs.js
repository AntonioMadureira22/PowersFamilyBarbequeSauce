const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Sauce {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Orders {
    _id: ID
    purchaseDate: String
    sauces: [Sauce]
  }

  type User {
    _id: ID
    username: String
    email: String
    orders: [Orders]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    sauces(category: ID, name: String): [Sauce]
    sauce(_id: ID!): Sauce
    user: User
    orders(_id: ID!): Orders
    checkout(sauces: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrders(sauces: [ID]!): Orders
    updateUser(username: String, email: String, password: String): User
    updateSauce(_id: ID!, quantity: Int!): Sauce
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
