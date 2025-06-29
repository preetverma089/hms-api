import express from "express";
import { loginUser, signUpUser } from "../controllers/UserController.js";
import { validate, validationRules } from "../middlewares/validateUser.js";
const router = express.Router();
/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userDetails:
 *                 type: object
 *                 properties:
 *                   fullName:
 *                     type: string
 *                   password:
 *                     type: string
 *                   email:
 *                     type: string
 *     responses:
 *       200:
 *         description: User created successfully
 */
router.post("/signup", validationRules("signup"), validate, signUpUser);
/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 properties:
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *     responses:
 *       200:
 *         description: User login successfully
 */
router.post("/login", validationRules("login"), validate, loginUser);
export default router;
