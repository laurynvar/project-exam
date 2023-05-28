import { useState, createContext, useEffect } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationWrapper = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("isSignedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  const handleAuthentication = (data) => setIsSignedIn(data);

  return (
    <AuthenticationContext.Provider
      value={{ isSignedIn, setIsSignedIn: handleAuthentication }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
