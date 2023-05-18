import { Outlet, useNavigate, Navigate, useLocation } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import { useContext, useEffect } from "react";
import axios from "axios";

const Protected = ({ isLoading, setIsLoading }) => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.id) {
          setIsSignedIn(true);
          navigate(location.pathname);
          setIsLoading(false);
        }
      });
  }, []);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default Protected;
