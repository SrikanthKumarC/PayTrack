"use client";
import { createContext, useState } from "react";

export const LoadingContext = createContext({});

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  console.log("loading changed to ", loading);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
export default LoadingProvider;
