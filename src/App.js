import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
    </Routes>
  );
}

export default App;
