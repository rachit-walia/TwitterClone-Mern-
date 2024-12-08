import React, { useEffect, useState, useRef } from "react";
import socket from "../socket";
import './Chat.css';
import axios from "axios";

import { useParams } from "react-router-dom";

const Chat = () => {
  const { userId, otherUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/chat/${userId}/${otherUserId}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();

    socket.on("receiveMessage", (message) => {
      if (
        (message.senderId === userId && message.receiverId === otherUserId) ||
        (message.senderId === otherUserId && message.receiverId === userId)
      ) {
        setMessages((prev) => [...prev, message]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [userId, otherUserId]);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      const message = {
        senderId: userId,
        receiverId: otherUserId,
        content: newMessage.trim(),
      };

      socket.emit("sendMessage", message);
      setMessages((prev) => [...prev, message]);

      try {
        await axios.post("http://localhost:8080/chat/send", message);
      } catch (error) {
        console.error("Error saving message:", error);
      }

      setNewMessage("");
    }
  };

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-box">
        {isLoading ? (
          <p className="loading-text">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="no-messages">No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.senderId === userId ? "sent" : "received"
              }`}
            >
              <p>{msg.content}</p>
              <span className="message-timestamp">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))
        )}
        <div ref={messagesEndRef} /> {/* For auto-scrolling */}
      </div>
      <div className="chat-input-wrapper">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button
          onClick={sendMessage}
          disabled={!newMessage.trim()}
          className={`send-button ${!newMessage.trim() ? "disabled" : ""}`}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
