import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Journey from "./components/Journey/Journey";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buyer from "./components/Register/Buyer/Buyer";
import Upload from "./components/Register/Buyer/Uploadimg/Upload";
import Seller from "./components/Register/Seller/Seller";
import RegisterSeller from "./components/Register/Seller/RegisterSeller";
import UploadDocument from "./components/Register/Seller/UploadDocument";
import FaceVerification from "./components/Register/Seller/FaceVerification";
import Home1 from "./components/Home1/Home1";
import CreatorPage from './components/Home1/CreatorPage'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/seller" element={<Seller/>}/>
          <Route path="/regSeller" element={<RegisterSeller/>} />
          <Route path="/uploaddoc" element={<UploadDocument/>}/>
          <Route path="/face" element={<FaceVerification/>}/>
          <Route path="/home1" element={<Home1/>}/>
          <Route path="/CreatorPage" element={<CreatorPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
