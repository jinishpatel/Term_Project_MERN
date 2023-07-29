const express = require("express");
const app = express();
const errorMiddleware = require("../Backend/middleware/error");
app.use(express.json());

//routes
const product = require("./routes/product");
app.use("/api/v1", product);

//middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
