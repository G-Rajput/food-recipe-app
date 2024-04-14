import React, { createContext, FC, useState } from "react";

interface GlobalStateProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext<any>(null);

const GlobalState: FC<GlobalStateProps> = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
