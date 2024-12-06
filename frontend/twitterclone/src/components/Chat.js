import React, { useEffect, useState, useRef } from "react";
import socket from "../socket";
import axios from "axios";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { userId, otherUserId } = useParams(); // Fixed typo here
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
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      <div className="chat-box flex-1 overflow-y-auto p-4">
        {isLoading ? (
          <p>Loading messages...</p>
        ) : messages.length === 0 ? (
          <p>No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 p-2 rounded-lg ${
                msg.senderId === userId
                  ? "bg-blue-600 self-end"
                  : "bg-gray-700 self-start"
              }`}
            >
              <p>{msg.content}</p>
            </div>
          ))
        )}
        <div ref={messagesEndRef} /> {/* For auto-scrolling */}
      </div>
      <div className="chat-input-wrapper flex p-4 bg-gray-800">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 bg-gray-700 text-white rounded-lg outline-none"
        />
        <button
          onClick={sendMessage}
          disabled={!newMessage.trim()}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
