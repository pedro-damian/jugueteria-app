import { Routes, Route } from "react-router-dom";
import SearchBar from "../components/Search";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Registro from "../pages/Registro";
import Login from "../pages/Login";
import BannerCotiza from "../components/BannerCotiza";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <BannerCotiza />
        <SearchBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
