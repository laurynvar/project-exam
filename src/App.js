import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Home";
import { Login } from "./components/Login";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<Login />} path="login" />
    </Routes>
  );
}

export default App;
