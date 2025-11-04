import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Journey from "./components/Journey/Journey";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ use Routes instead of Router

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
