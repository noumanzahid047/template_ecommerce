import express from 'express';
import { deleteProduct } from '../controllers/productControllers/deleteProduct.js';
import { getAllReviews } from '../controllers/productControllers/getAllReviews.js';
import { getProductDetail } from '../controllers/productControllers/getProductDetail.js';
import { getProducts } from '../controllers/productControllers/getProducts.js';
import {createProduct } from '../controllers/productControllers/newProduct.js';
import { productReview } from '../controllers/productControllers/productReview.js';
import { updateProduct } from '../controllers/productControllers/updateProduct.js';
import { authRoles, isAuthenticated } from '../middleWare/isAuth.js';
const router = express.Router();
router.put("/review", (isAuthenticated), (productReview));
router.get("/reviews/all" , (getAllReviews));
// admin Routes Only
router.post("/admin/new", (isAuthenticated), (authRoles("admin")), (createProduct));
router.put("/admin/update/:id",(isAuthenticated), (authRoles("admin")),(updateProduct));
router.delete("/admin/remove/:id",(isAuthenticated), (authRoles("admin")), (deleteProduct));
// common routes
router.get("/allproducts", (getProducts));
router.get("/:id", (getProductDetail));

export default router;