import React, { createContext, useState } from "react";

export const AppContext = createContext({
  fusejs: null,
  setFusejs: () => {},
});

export const AppProvider = ({ children }) => {
  const [fusejs, setFusejs] = useState(null);

  return (
    <AppContext.Provider value={{ fusejs, setFusejs }}>
      {children}
    </AppContext.Provider>
  );
};