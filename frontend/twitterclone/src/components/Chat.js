// import React, { useEffect, useState } from "react";
// import socket from "../socket";
// import axios from "axios";
// import { useParams } from "react-router-dom"; // Import useParams

// const Chat = () => {
//   const { userId, otherUserId } = useParams(); // Get userId and otherUserId from the route params
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/chat/${userId}/${otherUserId}`
//         );
//         setMessages(response.data);
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };
//     fetchMessages();

//     socket.on("receiveMessage", (message) => {
//       if (
//         message.senderId === otherUserId ||
//         message.receiverId === userId ||
//         message.senderId === userId ||
//         message.receiverId === otherUserId
//       ) {
//         setMessages((prev) => [...prev, message]);
//       }
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [userId, otherUserId]);

//   const sendMessage = async () => {
//     if (newMessage.trim()) {
//       const message = {
//         senderId: userId,
//         receiverId: otherUserId,
//         content: newMessage,
//       };

//       // Emit message to socket server
//       socket.emit("sendMessage", message);

//       // Add message to UI immediately
//       setMessages((prev) => [...prev, message]);

//       // Save message to backend
//       try {
//         await axios.post("http://localhost:8080/chat/send", message);
//       } catch (error) {
//         console.error("Error saving message:", error);
//       }

//       // Clear the input
//       setNewMessage("");
//     }
//   };


//   return (
//     <div>
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={msg.senderId === userId ? "my-message" : "their-message"}
//           >
//             <p>{msg.content}</p>
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//         placeholder="Type a message..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default Chat;

import React, { useEffect, useState, useRef } from "react";
import socket from "../socket";
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
        message.senderId === userId ||
        message.receiverId === otherUserId
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
        content: newMessage,
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
    <div>
      <div className="chat-box">
        {isLoading ? (
          <p>Loading messages...</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.senderId === userId ? "my-message" : "their-message"
              }
            >
              <p>{msg.content}</p>
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
        />
        <button onClick={sendMessage} disabled={!newMessage.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
