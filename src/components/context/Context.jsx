import { createContext } from "react";

export const Contexto = createContext();

export const CtxProvider = ({ children }) => {
  return (
    <Contexto.Provider
      value={{
        colorRed: "#ff005c",
        colorBlue: "#0072bb",
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
