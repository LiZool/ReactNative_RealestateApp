import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext<any>(null);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  const refetch = () => {
    // Example function to refetch user data
  };

  const logout = async () => {
    try {
      // Example: Clear user data
      setUser(null);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <GlobalContext.Provider value={{ user, refetch, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

// ✅ Make sure this is correctly exported!
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};