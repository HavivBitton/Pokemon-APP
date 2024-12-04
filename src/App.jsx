import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Import Pages
import Home from "./pages/Home/HomeIndex.jsx";
import PokemonPageIndex from "./pages/PokemonPage/PokemonPageindex.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon/:name" element={<PokemonPageIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
