import express from 'express';
import { register } from '../controllers/userControllers/userRegistration.js';
import { login } from "../controllers/userControllers/userLogin.js"
import { logout } from '../controllers/userControllers/userLogout.js';
import { forgotpassword, resetPass } from '../controllers/userControllers/forgotPassword.js';
import { emailVerified } from '../controllers/userControllers/emailVerification.js';
import { getUserDetails } from '../controllers/userControllers/getUserDetails.js';
import { authRoles, isAuthenticated } from '../middleWare/isAuth.js';
import { updatePassword } from '../controllers/userControllers/updatePassword.js';
import { getAllUsers } from '../controllers/userControllers/getAllUsers.js';
import { getSingleUserDetail } from '../controllers/userControllers/getSingleUserDetail.js';
import { updateRole } from '../controllers/userControllers/userRole.js';
import { deleteUser } from '../controllers/userControllers/deleteUser.js';
//const express = require('express');
const router = express.Router();

router.post("/new", (register));
router.post("/login" , (login));
router.get("/logout", (logout));
router.post("/password/forgot", (forgotpassword));
router.put("/password/reset/:token",(resetPass));
// secured routes (only login user can access)
router.get("/profile",(isAuthenticated) ,(getUserDetails));
router.put("/password/update",(isAuthenticated) ,(updatePassword));
// admin routes
router.get("/users/all", (isAuthenticated), (authRoles("admin")),(getAllUsers));
router.get("/users/:id",(isAuthenticated), (authRoles("admin")), (getSingleUserDetail));
router.put("/role/update/:id", (isAuthenticated), (authRoles("admin")),(updateRole));
router.delete("/remove/:id",(isAuthenticated), (authRoles("admin")),(deleteUser));
// Email verification
router.put("/verification/:token", (emailVerified));
export default router;