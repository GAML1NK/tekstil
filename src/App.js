import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Sabit navbar */}
      <MyNavbar />

      {/* Orta içerik */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kategoriler" element={<Categories />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </div>

      {/* Sabit footer */}
      <Footer />
    </div>
  );
}

export default App;
