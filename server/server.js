const express = require("express");
const { ApolloServer } = require('apollo-server-express');

const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config({ path: "./config.env" });

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  await server.start();

  server.applyMiddleware({ app });

  console.log(`use graphql at localhost:${PORT}${server.graphqlPath}`)
};
const db = require("./config/connection");
startServer();

db.open('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
  });
});

// app.use(require("./routes/record"));
// get driver connection

 
app.listen(port, () => {
  // perform a database connection when server starts
  db.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

