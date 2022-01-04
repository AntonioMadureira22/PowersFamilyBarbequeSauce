const express = require("express");
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const cors = require("cors");
app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "./config.env" });



// app.use(require("./routes/record"));
// get driver connection
const dbo = require("./config/connection");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

