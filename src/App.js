import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HomePage } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ClientRegister } from "./components/ClientRegister";
import { ParticipantList } from "./components/ParticipantList";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { useContext, useState } from "react";
import { AuthenticationContext } from "./components/AuthenticationContext";
import Protected from "./components/Protected";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsSignedIn(false);
    navigate("/");
  };

  return (
    <>
      <NavBar onLogOut={handleLogOut} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <Protected isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        >
          <Route path="/clientregister" element={<ClientRegister />} />
          <Route path="/participants" element={<ParticipantList />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
