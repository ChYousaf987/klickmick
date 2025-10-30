import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}