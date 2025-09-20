import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import CategoryProducts from "./pages/CategoryProducts";
import LiveSupport from "./components/LiveSupport";

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
          <Route path="/urun/:id" element={<ProductDetail />} />
          <Route path="/urunler/:kategori" element={<CategoryProducts />} />
        </Routes>
      </div>

      {/* Sabit footer */}
      <Footer />
      <LiveSupport />
    </div>
  );
}

export default App;
