import { useState, createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationWrapper = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const handleAuthentication = (data) => setIsSignedIn(data);

  return (
    <AuthenticationContext.Provider
      value={{ isSignedIn, setIsSignedIn: handleAuthentication }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
