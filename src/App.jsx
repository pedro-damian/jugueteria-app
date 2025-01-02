import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import NotFound from "./components/layout/NotFound404";
import UnderConstruction from "./components/layout/UnderConstruction";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />

            {/* Rutas en construcción */}
            <Route path="/favoritos" element={<UnderConstruction />} />
            <Route path="/carrito" element={<UnderConstruction />} />

            {/* Ruta 404 para páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
