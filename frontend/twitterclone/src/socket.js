// src/socket.js
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");
// Replace with your backend URL

socket.on("connect", () => {
  console.log("Connected to server");
});
export default socket;
