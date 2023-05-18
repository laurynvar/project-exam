import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ClientRegister } from "./components/ClientRegister";
import { ParticipantList } from "./components/ParticipantList";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<ClientRegister />} path="/clientregister" />
        <Route element={<ParticipantList />} path="/participants" />
      </Routes>
    </>
  );
}

export default App;
