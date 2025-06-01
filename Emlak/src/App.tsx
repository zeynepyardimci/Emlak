import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import { ListingProvider } from "./context/ListingContext";
import ListingDetail from "./pages/ListingDetail";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./admin/AdminLogin";
import AdminRoute from "./admin/AdminRoute";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "keen-slider/keen-slider.min.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <ListingProvider>
      <Router>
        {/* Tüm uygulamayı saran dış div */}
        <div className="bg-tas min-h-screen text-gray-800" >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ilanlar" element={<Listings />} />
            <Route path="/ilan/:id" element={<ListingDetail />} />
            {/* Admin Login sayfası */}
            <Route path="/admin/login" element={<AdminLogin setIsAuth={setIsAuth} />} />
            {/* Admin paneli, sadece yetkili kullanıcılar için */}
            <Route
              path="/admin"
              element={
                <AdminRoute isAuth={isAuth}>
                  <AdminPanel />
                </AdminRoute>
              } />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ListingProvider>
  );
}

export default App
