import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
    try {
        const { Name, Username, Email, Password } = req.body;

        // Check if all fields are provided
        if (!Name || !Username || !Email || !Password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false,
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ Email }); // Corrected: Use await for asynchronous call
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists.",
                success: false,
            });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(Password, 10); // Adjusted salt rounds to 10 for typical use

        // Create a new user
        await User.create({
            Name,
            Username,
            Email,
            Password: hashedPassword,
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true,
        });

    } catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).json({
            message: "Server error, please try again later.",
            success: false,
        });
    }
};

export const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        // Check if all fields are provided
        if (!Email || !Password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false,
            });
        }

        // Find the user by email
        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(401).json({
                message: "User does not exist with this email.",
                success: false,
            });
        }

        // Compare the password
        const isMatch = await bcryptjs.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }

        // Prepare token data
        const tokenData = {
            userId: user._id,
        };

        // Generate JWT token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        // Set the cookie with the token
        return res.status(200)
            .cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
            .json({
                message: `Welcome back, ${user.Name}`, // Corrected to use template literals properly
                success: true,
            });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({
            message: "Server error, please try again later.",
            success: false,
        });
    }
};
