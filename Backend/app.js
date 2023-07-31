const express = require("express");
const app = express();
const errorMiddleware = require("../Backend/middleware/error");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//routes
const product = require("./routes/product");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
//middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
