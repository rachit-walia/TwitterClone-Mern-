// routes/chatRoutes.js
import express from "express";
import {Message} from "../models/messageSchema.js"; // Ensure correct file extension (.js) when using ES6 modules

const router = express.Router();

router.post("/send", async (req, res) => {
  const { senderId, receiverId, content } = req.body;

  try {
    const newMessage = new Message({
      senderId,
      receiverId,
      content,
    });

    await newMessage.save();
    res.status(200).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Error sending message" });
  }
});

// Fetch conversation between two users
router.get("/:userId/:otherUserId", async (req, res) => {
  const { userId, otherUserId } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { senderId: userId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: userId },
      ],
    }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
});

export default router;
