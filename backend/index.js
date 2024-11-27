import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";
import { createServer } from "http"; // Import HTTP module
import { Server } from "socket.io"; // Import Socket.IO
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config({
  path: ".env",
});

databaseConnection();

const app = express();
const server = createServer(app); // Create HTTP server for Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Frontend origin
    credentials: true,
  },
});

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

// Socket.IO: Handle connections
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for sendMessage event
  socket.on("sendMessage", (message) => {
    const { receiverId, senderId, content } = message;
    console.log("New message received:", message);

    // Emit message to the receiver
    io.to(receiverId).emit("receiveMessage", { senderId, content });
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

app.use("/chat", chatRoutes);

// Start the server
server.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
