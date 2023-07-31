const express = require("express");
const app = express();
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
const errorMiddleware = require("../Backend/middleware/error");
const cookieParser = require("cookie-parser");
>>>>>>> Stashed changes

=======
const errorMiddleware = require("../Backend/middleware/error");
>>>>>>> 9f736489382723fa0182cb9916caf67d2b67934d
app.use(express.json());
app.use(cookieParser());

//routes
const product = require("./routes/product");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");
app.use("/api/v1", product);
<<<<<<< Updated upstream
=======
app.use("/api/v1", user);
app.use("/api/v1", order);
//middleware to handle errors
app.use(errorMiddleware);
>>>>>>> Stashed changes

//middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
