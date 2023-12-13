"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [toggleVal, SetToggleVal] = useState("flex");

  const toggleSidebar = () => {
    SetToggleVal((prev) => { prev === "hidden" ? SetToggleVal("flex") : SetToggleVal("hidden") })
  }
  return (
    < ThemeContext.Provider value={{ toggleVal, toggleSidebar }}>
      {children}
    </ ThemeContext.Provider>
  )
}
