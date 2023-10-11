/** @format */

const express = require('express');
const app = express();
const errorMiddleware = require('../Backend/middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

app.use(cors({ origin: 'http://localhost:5173', credential: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//routes
const product = require('./routes/product');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoutes');
const payment = require('./routes/paymentRoute');
app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/api/v1', payment);
//middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
