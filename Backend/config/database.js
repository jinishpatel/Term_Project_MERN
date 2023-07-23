/* This code is using the Mongoose library to connect to a MongoDB database. */
const mongoose = require("mongoose");

mongoose.connect("mongo://localhost:27017/ecommerce", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then((data) => { console.log("Connected to database") }).catch((err) => { console.log(`mongoDB connecter with server :${data.connection.host}`) }).catch((err) => { console.log(err) });