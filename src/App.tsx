import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import Details from "./pages/details/Details";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
