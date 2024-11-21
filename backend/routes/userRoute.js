import express from "express";
import { Register, Login, logout } from "../controllers/userController.js"; // Import logout function

const router = express.Router();

// Define routes
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout); // Fixed formatting

export default router;
