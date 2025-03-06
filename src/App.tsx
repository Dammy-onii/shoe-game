import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Genre from "./pages/Genre";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/genre" element={<Genre />} />
    </Routes>
  );
}

export default App;
