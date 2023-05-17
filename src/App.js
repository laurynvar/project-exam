import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Home";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  );
}

export default App;
