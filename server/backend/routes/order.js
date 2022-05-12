import express from 'express';
import { newOrder } from '../controllers/orderControllers/createOrder.js';
import { getAllOrder } from '../controllers/orderControllers/getAllOrdersAdmin.js';
import { getSingleOrder } from '../controllers/orderControllers/getSingleOrder.js';
import { myOrder } from '../controllers/orderControllers/logInUserOrders.js';
import { authRoles, isAuthenticated } from '../middleWare/isAuth.js';

const router = express.Router();

// auth user routes
router.post("/new", (isAuthenticated), (newOrder));
router.get("/orders/all", (isAuthenticated), (myOrder));

// admin routes only
router.get("/admin/:id", (isAuthenticated),(authRoles("admin")),(getSingleOrder));
router.get("/admin/orders/all",(isAuthenticated),(authRoles("admin")), (getAllOrder));

export default router;