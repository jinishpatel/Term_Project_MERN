/* This code is using the Mongoose library to connect to a MongoDB database. */
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI, {}).then((data) => {
    console.log(`Connected to database at ${data.connection.host} `);
  });
};

module.exports = connectDatabase;
