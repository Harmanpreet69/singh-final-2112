"use client";

import { createContext, useReducer } from "react";

const initialTheme = "bg-info";

export const themeContext = createContext(null);
export const themeDispatchContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <themeContext.Provider value={theme}>
      <themeDispatchContext.Provider value={dispatch}>
        {children}
      </themeDispatchContext.Provider>
    </themeContext.Provider>
  );
}

function themeReducer(theme, action) {
  switch (action.type) {
    case "update": {
      return action.theme;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
