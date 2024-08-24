"use client";
import { createContext, useState } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLikedOrFan, setIsLikedOrFan] = useState(false);
  const [postLikes, setPostLikes] = useState(0);

  return (
    <AppContext.Provider
      value={{
        showDropdown,
        setShowDropdown,
        isLikedOrFan,
        setIsLikedOrFan,
        postLikes,
        setPostLikes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
