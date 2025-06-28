import express from "express";
import { signUpUser } from "../controllers/UserController.js";
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
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *     responses:
 *       200:
 *         description: User created successfully
 */
router.post("/signup", validationRules("signup"), validate, signUpUser);

export default router;
