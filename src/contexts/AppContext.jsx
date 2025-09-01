/* eslint-disable react-refresh/only-export-components */
// src/context/AppContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Dark Mode toggle effect
  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
    // You can also navigate or filter results here
  };

  return (
    <AppContext.Provider
      value={{ darkMode, setDarkMode, searchQuery, handleSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};
