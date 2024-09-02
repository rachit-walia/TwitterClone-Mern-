import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
    try {
        const { Name, Username, Email, Password } = req.body;

        if (!Name || !Username || !Email || !Password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false,
            });
        }

        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists.",
                success: false,
            });
        }

        const hashedPassword = await bcryptjs.hash(Password, 16);

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
        const { Email, Password } = req.body; // Corrected to req.body
        if (!Email || !Password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false,
            });
        }

        const user = await User.findOne({ Email }); // Corrected findOne method call
        if (!user) { // Corrected variable name check
            return res.status(401).json({
                message: "User does not exist with this email.",
                success: false,
            });
        }

        const isMatch = await bcryptjs.compare(Password, user.Password); // Corrected argument order
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }

        const tokenData = {
            userId: user._id, // Corrected property name
        };

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        return res.status(200).cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true }).json({ // Corrected to 200 for successful login and cookie settings
            message: `Welcome back, ${user.Name}`, // Corrected greeting message
            success: true,
        });

    } catch (error) {
        console.error("Error during login:", error); // Corrected error handling
        return res.status(500).json({
            message: "Server error, please try again later.",
            success: false,
        });
    }
};
