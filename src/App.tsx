import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Game from "./pages/Game";
import Viewer from "./pages/Viewer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/genre" element={<Genre />} />
      <Route path="/game" element={<Game />} />
      <Route path="/view" element={<Viewer />} />
    </Routes>
  );
}

export default App;
