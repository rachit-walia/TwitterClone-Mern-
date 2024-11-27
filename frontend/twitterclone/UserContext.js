// UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState("123456"); // Example logged-in user ID

  return (
    <UserContext.Provider value={{ currentUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
