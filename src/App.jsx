import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Journey from "./components/Journey/Journey";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Buyer from "./components/Register/Buyer/Buyer";
import Upload from "./components/Register/Buyer/Uploadimg/Upload";
import Seller from "./components/Register/Seller/Seller";
import RegisterSeller from "./components/Register/Seller/RegisterSeller";
import UploadDocument from "./components/Register/Seller/UploadDocument";
import FaceVerification from "./components/Register/Seller/FaceVerification";
import Home1 from "./components/Home1/Home1";

// 🔹 Create a wrapper so we can hide Navbar/Footer on certain routes
function LayoutWrapper() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/upload"; // hide on upload page

  return (
    <>
      {/* ✅ Navbar with conditional icons */}
      {!hideNavbarFooter && (
        <Navbar showIcons={location.pathname === "/home1"} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/regSeller" element={<RegisterSeller />} />
        <Route path="/uploaddoc" element={<UploadDocument />} />
        <Route path="/face" element={<FaceVerification />} />
        <Route path="/home1" element={<Home1 />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <BrowserRouter>
        <LayoutWrapper />
      </BrowserRouter>
    </div>
  );
}
