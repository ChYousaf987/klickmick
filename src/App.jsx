import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Journey from "./components/Journey/Journey";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buyer from "./components/Register/Buyer/Buyer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/buyer" element={<Buyer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
