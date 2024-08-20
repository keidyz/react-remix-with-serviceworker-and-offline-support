import { createContext, useEffect } from "react";

const defaultTest = {
  info: () => false,
};

export const TestContext = createContext(defaultTest);
// eslint-disable-next-line react/prop-types
export const TestProvider = ({ children }) => {
  return <TestContext.Provider value={{
    info: () => {
      return true;
    },
  }}>{children}</TestContext.Provider>;
};
