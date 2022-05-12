import express from 'express';
import dotenv from 'dotenv';
import cookies from 'cookie-parser';

// Routes Import
import products from './routes/products.js';
import users from './routes/user.js';
import orders from "./routes/order.js";


const app = express();

if (process.env.NODE_ENV !== "production"){
    dotenv.config({path: "backend/config/config.env"});}

//using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

 // routes
 app.use('/product', products);
 app.use('/user', users);
 app.use('/order', orders);

export default app;