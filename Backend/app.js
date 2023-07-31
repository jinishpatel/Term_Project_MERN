const express = require("express");
const app = express();
<<<<<<< Updated upstream
=======
const errorMiddleware = require("../Backend/middleware/error");
const cookieParser = require("cookie-parser");
>>>>>>> Stashed changes

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

module.exports = app;
